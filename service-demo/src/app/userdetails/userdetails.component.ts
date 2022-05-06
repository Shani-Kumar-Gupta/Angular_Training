import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css'],
})
export class UserdetailsComponent implements OnInit {
  @Input() data: { name: string; company: string; email: string }[] = [];
  constructor() {}

  ngOnInit(): void {}
}
