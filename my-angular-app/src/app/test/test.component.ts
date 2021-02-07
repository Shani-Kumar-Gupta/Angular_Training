import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-test', // We can use selector in three ways : (1) Custom tag 
  //selector: '.app-test', //(2) as a class ('.app-test') 
  selector: '[app-test]', //(3) inclose selector in [app-test]
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
