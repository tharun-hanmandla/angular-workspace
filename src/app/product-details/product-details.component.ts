import { Product } from './../models/product.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() productInfo!: Product
  @Input() selectedButtonName!: string
  constructor() { }

  ngOnInit(): void {
  }

}
