import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  displayName = false;
  public color = "red";

  public colors = ["red", "green", "blue", "yellow"]
  constructor() { }

  ngOnInit(): void {
  }

}
