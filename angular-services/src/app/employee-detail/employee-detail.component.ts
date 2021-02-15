import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit, AfterContentChecked {

  nameValue: string = '';
  empDetail : any = []
  constructor(private _employeeService : EmployeeService) { }

  ngOnInit(): void {
    this.empDetail = this._employeeService.getEmployees();
  }

  ngAfterContentChecked(){
    let name = this._employeeService.getEmployeeName();
    if(name){
      this.nameValue = name;
    }
  }

}
