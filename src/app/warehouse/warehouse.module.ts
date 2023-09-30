import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WarehouseListComponent } from './warehouse-list/warehouse-list.component';
import { WarehouseCreateComponent } from './warehouse-create/warehouse-create.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    WarehouseListComponent,
    WarehouseCreateComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'warehouses', component: WarehouseListComponent },
      { path: 'warehouses/create', component: WarehouseCreateComponent }

    ])
  ],
  exports : [RouterModule]
})
export class WarehouseModule { }
