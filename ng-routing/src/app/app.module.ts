import {
  HashLocationStrategy,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CustomerComponent } from './customer/customer.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [AppComponent, UserComponent, CustomerComponent, ProductComponent, OrderComponent, PageNotFoundComponent, AdminComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
