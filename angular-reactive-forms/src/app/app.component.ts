import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
      username: new FormControl('',Validators.required),
      email: new FormControl('', [Validators.email, Validators.required])
    });
  }

  onSubmit() {
    console.log("form:::",this.signupForm);
  }
}
