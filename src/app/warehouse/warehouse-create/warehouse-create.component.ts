import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-warehouse-create',
  templateUrl: './warehouse-create.component.html',
  styleUrls: ['./warehouse-create.component.css']
})
export class WarehouseCreateComponent {
    constructor(private location :Location){

    }

    back():void{
      this.location.back();
    }
}
