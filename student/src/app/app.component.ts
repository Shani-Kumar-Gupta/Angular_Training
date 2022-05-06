import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { StudentDataComponent } from './student-data/student-data.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(StudentDataComponent) student: StudentDataComponent;

  title = 'student';
  studentDetails = {
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
  };

  storeStudentData() {
    console.log(this.studentDetails);
  }

  receiveData(event: any) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    console.log(this.student.myData);
  }
}
