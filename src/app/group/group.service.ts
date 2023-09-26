import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Group, IGroup } from './group';
import { Observable } from 'rxjs';
import { AppSettings } from '../share/app-settings';
@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http:HttpClient ) { }

  createGroup(group:Group):Observable<void>{
    return this.http.post<void>(AppSettings.ENDPOINT+'groups',group);
  }
  getAllGroups():Observable<IGroup[]>{
    return this.http.get<IGroup[]>(AppSettings.ENDPOINT+'groups');
  }



}
