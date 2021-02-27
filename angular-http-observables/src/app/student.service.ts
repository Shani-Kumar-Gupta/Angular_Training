import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getStudentData() {
    return [
      {"id": 1, "Name": "Shani Kumar Gupta", "Contact": 7054048089},
      {"id": 2, "Name": "Vivek Kumar", "Contact": 7050971089},
      {"id": 3, "Name": "Aman Kumar", "Contact": 9074048069},
      {"id": 4, "Name": "Saurabh Singh", "Contact": 7878788089},
      {"id": 5, "Name": "Prince Singh", "Contact": 7908048089},
    ]
  }
}
