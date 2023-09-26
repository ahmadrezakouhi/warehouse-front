import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {

  constructor() { }
  searchItem(id:number){
    return {
      name:"کالا 1",
      group:"اداری",
      model:"z56",
      description:"توضیحات"
    }
  }
}
