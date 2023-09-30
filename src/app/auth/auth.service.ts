import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginInfo } from './login-info';
import { Router } from '@angular/router';
import { AppSettings } from '../share/app-settings';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  tokenObject:any;
  admin:boolean = false;
  constructor(private http:HttpClient ,
    private router:Router
    ) { }

  get isLoggedIn():boolean{
    if(this.tokenObject!= null && this.tokenObject.token !==''){
      return true;
    }
    return false;
  }

  login(loginInfo:LoginInfo):Observable<void>{
   return  this.http.post<void>(AppSettings.ENDPOINT+"authentication/login",loginInfo)
    .pipe(tap(
       token=>this.tokenObject = token
    ));

  }

  logout(){
    this.tokenObject.token ='';
    this.router.navigate(['/login']);
  }
}

