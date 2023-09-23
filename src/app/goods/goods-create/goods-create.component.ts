import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-goods-create',
  templateUrl: './goods-create.component.html',
  styleUrls: ['./goods-create.component.css']
})
export class GoodsCreateComponent {
 constructor(private location :Location){

 }

 back():void{
  this.location.back();
 }

}
