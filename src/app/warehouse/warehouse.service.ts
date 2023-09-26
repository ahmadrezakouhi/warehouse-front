import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWarehouse } from './warehouse';
import { AppSettings } from '../share/app-settings';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  constructor(private http:HttpClient) { }

  getAllWarehouses():Observable<IWarehouse[]>{
    return this.http.get<IWarehouse[]>(AppSettings.ENDPOINT+'warehouses');
  }
}
