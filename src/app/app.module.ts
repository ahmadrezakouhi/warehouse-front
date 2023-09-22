import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ShareModule } from './share/share.module';
import { UserModule } from './user/user.module';
import { LoginComponent } from './user/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ShareModule,
    UserModule,
    RouterModule.forRoot([
      { path: '**', redirectTo:'login' }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
