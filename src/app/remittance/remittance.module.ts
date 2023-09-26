import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemittanceCreateComponent } from './remittance-create/remittance-create.component';
import { RemittanceListComponent } from './remittance-list/remittance-list.component';



@NgModule({
  declarations: [
   RemittanceCreateComponent,
   RemittanceListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RemittanceModule { }
