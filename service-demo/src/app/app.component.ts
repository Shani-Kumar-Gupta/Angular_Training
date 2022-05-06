import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'service-demo';
  userData: { name: string; company: string; email: string }[] = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    //var objname = new UserService();
    this.userData = this.userService.userData;
    console.log('user Data', this.userData);
  }

  xyz() {
    //var obj1 = new UserService();
  }

  getdata() {
    //var obj11 = new UserService();
  }
}
