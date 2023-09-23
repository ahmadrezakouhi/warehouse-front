import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ShareModule } from './share/share.module';
import { UserModule } from './user/user.module';
import { WarehouseModule } from './warehouse/warehouse.module';
import { GoodsModule } from './goods/goods.module';





@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    ShareModule,
    UserModule,
    WarehouseModule,
    GoodsModule,
    RouterModule.forRoot([
      { path: '**', redirectTo:'login' }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
