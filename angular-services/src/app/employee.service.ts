import { Injectable } from '@angular/core';

@Injectable()
// Step 1: Make a Service
export class EmployeeService {

  constructor() { }

  getEmployees() {
    return [
      { "id": 1, "name": "Vivek", "age": 25 },
      { "id": 2, "name": "Aman", "age": 21 },
      { "id": 3, "name": "Akash", "age": 24 },
      { "id": 4, "name": "Gautam", "age": 28 },
    ]
  }
}
