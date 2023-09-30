import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodsListComponent } from './goods-list/goods-list.component';
import { GoodsCreateComponent } from './goods-create/goods-create.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GoodsCreateComponent,
    GoodsListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'goods', component: GoodsListComponent },
      { path: 'goods/create', component: GoodsCreateComponent }
    ])
  ],
  exports : [
    RouterModule
  ]
})
export class GoodsModule { }
