import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitComponent } from './unit.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UnitComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'units',component:UnitComponent}
    ])
  ],
  exports:[
    RouterModule
  ]
})
export class UnitModule { }
