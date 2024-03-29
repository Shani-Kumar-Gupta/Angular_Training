import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MymoduleModule } from './mymodule/mymodule.module';
import { MyserviceService } from './myservice.service';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HeaderComponent],
  imports: [BrowserModule, MymoduleModule, FormsModule],
  providers: [MyserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
