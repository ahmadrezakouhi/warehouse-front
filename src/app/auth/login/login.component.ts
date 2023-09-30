import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { LoginInfo } from '../login-info';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginInfo:LoginInfo = new LoginInfo();
constructor(private authService:AuthService,
  private router:Router,
  private notification:ToastrService
  
  ){

}

login(){
  this.authService.login(this.loginInfo).subscribe({
    next: ()=>{
      this.router.navigate(['/warehouses']);
      this.notification.success('خوش آمدید');
    
    }
  })
}



}
