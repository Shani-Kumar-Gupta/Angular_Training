import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  name: string = '';
  company: string = '';
  email: string = '';
  constructor() {}

  ngOnInit(): void {}

  addUser() {
    
  }
}
