import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  nameValue: string = '';
  employees: any = [];

  // Step 3: DI of the Employee Service
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employees = this._employeeService.getEmployees();
  }

  setName() {
    console.log(this.nameValue);
    this._employeeService.setEmployeeName(this.nameValue);
  }

}
