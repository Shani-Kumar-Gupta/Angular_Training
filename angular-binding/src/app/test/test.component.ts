import { Component, OnInit } from '@angular/core';

//Interpolation: Bind data from the class to template

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  // template: `
  // <div>
  //   <h1>Hello Shani Kumar Gupta!!</h1>
  //   <h2>Interpolation : {{name}}</h2>
  // </div>`,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name1 = "Yshika";
  public name = "Gemini Solutions" // Class Property
  public url = window.location.href;
  public value = "xyz";
  // Property Binding
  public myId = "testId"
  public isDisabled = false;

  name3 : string = 'Priyanshu'; 

  // Class Binding
  public successClass = "text-success";
  public dangerClass = "text-danger";
  public fontClass = "text-special";
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  constructor() { }

  ngOnInit(): void {
  }

  greetUser = () => {
    return "Hello " + this.name;
  }

  onClick(){
    this.name3 = "Priyanshu Jain";
  }

}
