import { Component, OnInit } from '@angular/core';
import { IWarehouse } from '../warehouse';
import { WarehouseService } from '../warehouse.service';

@Component({
  selector: 'app-warehouse-list',
  templateUrl: './warehouse-list.component.html',
  styleUrls: ['./warehouse-list.component.css']
})
export class WarehouseListComponent implements OnInit {
warehouses:IWarehouse[] = [];
constructor(private warehouseService:WarehouseService){

}
  ngOnInit(): void {
    this.warehouseService.getAllWarehouses().subscribe({
      next:warehouses=>this.warehouses= warehouses
    });
    console.log(this.warehouses)
  }

}
