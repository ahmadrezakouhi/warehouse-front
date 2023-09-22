import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidbarComponent } from './sidbar/sidbar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidbarComponent,
  ],
  imports: [
    CommonModule
  ],
  
})
export class ShareModule { }
