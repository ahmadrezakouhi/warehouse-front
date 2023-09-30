import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Warehouse } from '../warehouse';
import { WarehouseService } from '../warehouse.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-warehouse-create',
  templateUrl: './warehouse-create.component.html',
  styleUrls: ['./warehouse-create.component.css']
})
export class WarehouseCreateComponent {

  warehouse:Warehouse = new Warehouse();
    constructor(private location :Location,
      private warehouseService:WarehouseService,
      private notification:ToastrService
      ){

    }

    createWarehouse(){
      this.warehouseService.createWarehouse(this.warehouse).subscribe({
        next: ()=>this.notification.success('انبار ایجاد شد')
      })
    }

    back():void{
      this.location.back();
    }
}
