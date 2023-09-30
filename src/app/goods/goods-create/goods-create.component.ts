import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Location } from '@angular/common';
import { UnitService } from 'src/app/unit/unit.service';
import { GroupService } from 'src/app/group/group.service';
import { IGroup } from 'src/app/group/group';
import { IUnit } from 'src/app/unit/unit';
import { Goods } from '../goods';
import { GoodsService } from '../goods.service';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-goods-create',
  templateUrl: './goods-create.component.html',
  styleUrls: ['./goods-create.component.css']
})
export class GoodsCreateComponent implements OnInit {
  groups:IGroup[];
  units:IUnit[];
  goods:Goods = new Goods();


 constructor(private location :Location,
  private unitService:UnitService,
  private groupService:GroupService,
  private goodsService:GoodsService,
  private notification:ToastrService
  
  ){

 }
  ngOnInit(): void {
    this.unitService.getAllUnits().subscribe({
      next:units => this.units = units
    })

    this.groupService.getAllGroups().subscribe({
      next: groups=>this.groups = groups
    })
    
  }


 back():void{
  this.location.back();
 }

 createGoods(){
   this.goodsService.createGoods(this.goods).subscribe({
    next : ()=>this.notification.success('کالا ایجاد شد')
   })
 }

}
