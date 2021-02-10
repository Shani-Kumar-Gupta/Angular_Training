import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public name = "John Doe";
  public message = "Welcome to learn Angular Pipes";
  public person = {
    "firstName" : "Smith",
    "lastName" : "Johnson"
  }

  public date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
