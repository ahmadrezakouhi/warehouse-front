import { Component } from '@angular/core';
import { ReceiptService } from '../receipt.service';
import { Location } from '@angular/common';
import { GoodsService } from 'src/app/goods/goods.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-receipt-create',
  templateUrl: './receipt-create.component.html',
  styleUrls: ['./receipt-create.component.css']
})
export class ReceiptCreateComponent {



  item: any;
  itemCode: number;
  items: any[] = [];
  amount: number = 0;

  constructor(private receiptService: ReceiptService ,
     private goodsService:GoodsService,
     private location:Location,
     private notification:ToastrService
     ) {

  }

  searchItem() {
    this.goodsService.getGoods(this.itemCode).subscribe({
       next:item=>this.item=item 
    });
  }

  addItem() {
    if (this.amount > 0 && this.item) {

      let foundItem = this.items.find(item => item.itemCode == this.itemCode);
      if (foundItem) {
        foundItem.amount += +this.amount;
      } else {
        this.item.amount = +this.amount;
        this.item.itemCode = +this.itemCode;
        this.items.push(this.item);
      }
    }


  }

  deleteItem(itemCode:number){
    let index = this.items.findIndex((item)=>item.itemCode == itemCode);
    console.log(itemCode)
    this.items.splice(index,1);
    this.notification.success('حذف شد');
  }

  back(): void {
    this.location.back();
  }
}
