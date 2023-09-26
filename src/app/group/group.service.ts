import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGroup } from './group';
import { Observable } from 'rxjs';
import { AppSettings } from '../share/app-settings';
@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http:HttpClient ) { }

  createUnit(group:IGroup):Observable<IGroup>{
    return this.http.post<IGroup>(AppSettings.ENDPOINT+'groups',group);
  }
  getAllUnits():Observable<IGroup[]>{
    return this.http.get<IGroup[]>(AppSettings.ENDPOINT+'groups');
  }

}
