import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  public studentList: any = [];

  constructor(private _studentListService: StudentService) { }

  ngOnInit(): void {
    this.studentList = this._studentListService.getStudentData();
  }

}
