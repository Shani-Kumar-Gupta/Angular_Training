import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStudent } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private _url : string = "/assets/data/student.json";

  constructor(private http: HttpClient) { } // Step 2: Injected as a dependency in the student service

  public studentData = this.http.get<IStudent[]>(this._url); // Step 3: Cast an observable into an array of employee using interface

  getStudentData() {
    return [
      {"id": 1, "Name": "Shani Kumar Gupta", "Contact": 7054048089},
      {"id": 2, "Name": "Vivek Kumar", "Contact": 7050971089},
      {"id": 3, "Name": "Aman Kumar", "Contact": 9074048069},
      {"id": 4, "Name": "Saurabh Singh", "Contact": 7878788089},
      {"id": 5, "Name": "Prince Singh", "Contact": 7908048089},
    ]
  }

  getStudent(): Observable<IStudent[]>{
    return this.studentData;
  }
}
