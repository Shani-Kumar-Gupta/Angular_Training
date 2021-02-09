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
  constructor() { }

  ngOnInit(): void {
  }

}
