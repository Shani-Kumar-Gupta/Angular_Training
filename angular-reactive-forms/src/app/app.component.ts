import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-reactive-forms';
  signupForm: any;
  ngOnInit() {
    this.signupForm = new FormGroup({
      username: new FormControl(''),
      email: new FormControl('')
    });
  }

  onSubmit() {
    console.log("form:::",this.signupForm);
  }
}
