import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css'],
})
export class StudentDataComponent implements OnInit {
  @Input() data: any;

  /* Child to Parent: Method 1*/
  childData: string = 'Child Data';
  @Output() childD: EventEmitter<string> = new EventEmitter();

  /* Child to Parent: Method 2*/
  myData: string = 'Shani Kumar Gupta';
  constructor() {}

  ngOnInit(): void {}

  sendData() {
    this.childD.emit(this.childData);
  }
}
