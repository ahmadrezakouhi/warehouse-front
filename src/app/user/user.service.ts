import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { IUser } from './user';
import { AppSettings } from '../share/app-settings';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getAllUsers():Observable<IUser[]>{
    return this.http.get<IUser[]>(AppSettings.ENDPOINT+'users');
  }
}
