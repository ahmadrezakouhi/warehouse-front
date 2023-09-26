import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GroupComponent } from './group.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GroupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:'groups',component: GroupComponent}
    ])
  ],
  exports:[RouterModule]
})
export class GroupModule  {

  

  



 }
