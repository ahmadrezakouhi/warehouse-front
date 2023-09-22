import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginComponent,
    UserRegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '/login', component: LoginComponent },
      { path: '/user/create', component: UserRegisterComponent }
    ])
  ]
})
export class UserModule { }
