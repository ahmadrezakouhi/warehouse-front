import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ShareModule } from './share/share.module';
import { UserModule } from './user/user.module';
import { WarehouseModule } from './warehouse/warehouse.module';
import { GoodsModule } from './goods/goods.module';
import { HttpClientModule } from '@angular/common/http';
import { ReceiptModule } from './receipt/receipt.module';
import { UnitModule } from './unit/unit.module';
import { GroupModule } from './group/group.module';
import { ToastrModule , ToastNoAnimation , ToastNoAnimationModule } from 'ngx-toastr';




@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ShareModule,
    UserModule,
    WarehouseModule,
    GoodsModule,
    ReceiptModule,
    UnitModule,
    GroupModule,
    
    RouterModule.forRoot([
      { path: '**', redirectTo:'login' }
    ]),
    ToastNoAnimationModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
