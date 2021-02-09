import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  public hasError = true;
  public highlightColor = "yellow";
  public titleStyle = {
    color: 'blue',
    fontStyle : 'italic'
  }

  // Event Binding Example: Set Property when button click
  public greeting = '' 
  constructor() { }

  ngOnInit(): void {
  }

  onClick(event: any){
    console.log("Event Binding");
    this.greeting = "Hello!! Event Binding";
    console.log(event);
  }

}
