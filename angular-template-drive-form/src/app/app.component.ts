import { Component, ViewChild } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('signup', {static : true}) signupForm: any
  title = 'angular-template-drive-form';
  user: any = new User;

  onSubmit() {
    console.log("Submit Form", this.signupForm);
  }
}
