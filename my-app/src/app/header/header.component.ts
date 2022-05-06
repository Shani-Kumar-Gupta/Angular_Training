import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  hide: boolean = true;

  myProjectName: string = '';
  name: string = 'Shani Kumar Gupta';
  headerStyle = {
    color: 'blue',
    fontStyle: 'italic',
  };

  message() {
    alert('Hello! Component');
    this.myProjectName = 'My First Project';
    console.log(this.myProjectName);
  }

  constructor() {
    console.log('constructor is called');
  }

  ngOnInit() {
    console.log('ngoninit called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }
  /* Two Way Binding */
}
