import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { StudentDataComponent } from './student-data/student-data.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'data-sharing';
  hide: boolean = true;

  @ViewChild(StudentDataComponent) student: StudentDataComponent;

  studentDetails = {
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
  };

  saveDetails() {
    console.log(this.studentDetails);
    this.hide = false;
  }

  receiveEvent(event: any) {
    this.hide = event;
    console.log(this.student.myName);
  }

  ngOnInit(): void {
    console.log('Parent Compon ngoninit called');
  }

  ngOnDestroy(): void {
    console.log('Parent Compon ngoninit called');
  }
}
