import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUnit, Unit } from './unit';
import { AppSettings } from '../share/app-settings';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  constructor(private http:HttpClient) { }

  getAllUnits():Observable<IUnit[]>{
    return this.http.get<IUnit[]>(AppSettings.ENDPOINT+'units');
  }

  createUnit(unit:Unit):Observable<void>{
    return this.http.post<void>(AppSettings.ENDPOINT+"units",unit);
  }
}
