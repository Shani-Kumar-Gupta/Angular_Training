// Root Component of our Application
// AppModule contain: html template + component
// It is a class to control the view logic

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to my-angular-app';
}

/* Component: Component has three part--
a) Template: View (HTML)
b) Class: Code, TypeScript, Data & Methods
c) MetaData: Information about component (Decorator)*/
