import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Goods, IGoods } from './goods';
import { AppSettings } from '../share/app-settings';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor(private http:HttpClient) { }

  getAllGoods():Observable<IGoods[]>{
    return this.http.get<IGoods[]>(AppSettings.ENDPOINT+'goods');
  }

  getGoods(goodsCode:number):Observable<IGoods>{
    return this.http.get<IGoods>(AppSettings.ENDPOINT+`goods/${goodsCode}`)
  }

  createGoods(goods:Goods):Observable<void>{
    return this.http.post<void>(AppSettings.ENDPOINT+"goods",goods);
  }
}
