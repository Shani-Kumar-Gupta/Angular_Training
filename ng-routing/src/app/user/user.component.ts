import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(private actRoute: ActivatedRoute) {
    this.actRoute.queryParams.subscribe((data) => {
      console.log('query params', data);
    });
  }

  ngOnInit(): void {}
}
