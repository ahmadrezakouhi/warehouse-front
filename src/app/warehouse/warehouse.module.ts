import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WarehouseListComponent } from './warehouse-list/warehouse-list.component';
import { WarehouseCreateComponent } from './warehouse-create/warehouse-create.component';



@NgModule({
  declarations: [
    WarehouseListComponent,
    WarehouseCreateComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'warehouses', component: WarehouseListComponent },
      { path: 'warehouses/create', component: WarehouseCreateComponent }

    ])
  ]
})
export class WarehouseModule { }
