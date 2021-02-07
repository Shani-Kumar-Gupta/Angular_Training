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

  public name = "Gemini Solutions" // Class Property
  public url = window.location.href;
  constructor() { }

  ngOnInit(): void {
  }

  greetUser = () => {
    return "Hello " + this.name;
  }

}
