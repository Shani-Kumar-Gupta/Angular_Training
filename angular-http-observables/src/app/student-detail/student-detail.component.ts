import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  public stuData: any = [];

  constructor(private _studentService: StudentService) { }

  ngOnInit(): void {
    this._studentService.getStudent()
      .subscribe(data => this.stuData = data); // Step 4: Subscribe observable to show data on view
    console.log("Student Data::::: ", this.stuData); // Get data async
  }

}
