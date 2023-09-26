import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { ReceiptListComponent } from './receipt-list/receipt-list.component';
import { ReceiptCreateComponent } from './receipt-create/receipt-create.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ReceiptListComponent,
    ReceiptCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:'receipts' , component:ReceiptListComponent},
      {path:'receipts/create' , component:ReceiptCreateComponent}
    ])
  ],
  exports:[RouterModule]
})
export class ReceiptModule { }
