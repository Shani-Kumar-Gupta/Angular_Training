import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-lifecycle-hooks';
  name = 'DATA FOR CHILD';
  showChildComponent = true;
  constructor() {
    console.log('::::::::::Parent Constructor called:::::::::');
  }

  onClickChangeInput() {
    this.name = "Text value changed";
  }

  toggleComponent() {
    this.showChildComponent = !this.showChildComponent;
  }
}
