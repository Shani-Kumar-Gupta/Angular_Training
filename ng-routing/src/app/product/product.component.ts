import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  id: string = '';
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((data) => {
      console.log('params', data);
      this.id = data.item;
    });
  }

  ngOnInit(): void {}
}
