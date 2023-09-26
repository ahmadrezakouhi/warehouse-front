import { Component, OnInit } from '@angular/core';
import { IUnit } from './unit';
import { UnitService } from './unit.service';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit{
units:IUnit[] =[];
constructor(private unitService:UnitService){

}
  ngOnInit(): void {
    this.unitService.getAllUnits().subscribe({
      next:units=>this.units=units
    })
  }


}
