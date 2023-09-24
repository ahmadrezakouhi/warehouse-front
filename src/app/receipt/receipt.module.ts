import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceiptListComponent } from './receipt-list/receipt-list.component';
import { ReceiptCreateComponent } from './receipt-create/receipt-create.component';



@NgModule({
  declarations: [
    ReceiptListComponent,
    ReceiptCreateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ReceiptModule { }
