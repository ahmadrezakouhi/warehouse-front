import { Component, OnInit } from '@angular/core';
import { IUnit, Unit } from './unit';
import { UnitService } from './unit.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit{
units:IUnit[] =[];
unit:Unit = new Unit();
constructor(private unitService:UnitService , private notification:ToastrService){

}
  ngOnInit(): void {
    this.getUnits()
  }
getUnits(){
  this.unitService.getAllUnits().subscribe({
    next:units=>this.units=units
  })
}


createUnit(){
  this.unitService.createUnit(this.unit).subscribe({
    next : param=>{this.notification.success("واحد اندازه گیری ایجاد شد")
    this.getUnits();
  }
  });
}

}
