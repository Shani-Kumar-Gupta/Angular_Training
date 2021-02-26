import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  public studentList: any = [];

  constructor(private _studentService: StudentService) { }

  ngOnInit(): void {
    this.studentList = this._studentService.getStudent();
    console.log("Student List:::::::: ", this.studentList);
  }

}
