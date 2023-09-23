import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {

  constructor(private location:Location){

  }

  back():void{
    this.location.back();
  }
}
