import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { BindingComponent } from './binding/binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { Trainingsession2Component } from './trainingsession2/trainingsession2.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    BindingComponent,
    TwoWayBindingComponent,
    Trainingsession2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
