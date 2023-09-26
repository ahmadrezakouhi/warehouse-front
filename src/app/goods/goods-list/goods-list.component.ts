import { Component, OnInit } from '@angular/core';
import { GoodsService } from '../goods.service';
import { IGoods } from '../goods';

@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.css']
})
export class GoodsListComponent implements OnInit {
  goods:IGoods[]=[]
  constructor(private goodsService:GoodsService){

  }
  ngOnInit(): void {
    this.goodsService.getAllGoods().subscribe({
      next:goods=>this.goods=goods
    })
  }


}
