import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegisterComponent } from './user-register/user-register.component';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';



@NgModule({
  declarations: [
    UserRegisterComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      
      { path: 'users/create', component: UserRegisterComponent },
      { path: 'users', component: UserListComponent },
    ])
  ],
  exports: [
    RouterModule,
  ]
})
export class UserModule { }
