import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {

  constructor() { }

  getStudent() {
    return [
      {"id" : 1, "name": "Shani Kumar Gupta", "College": "GLA University"},
      {"id" : 2, "name": "Priyanshu Jain", "College": "GLA University"},
      {"id" : 3, "name": "Yshika Agrawal", "College": "GLA University"},
      {"id" : 4, "name": "Keshavi Agrawal", "College": "GLA University"},
    ]
  }
}
