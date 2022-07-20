import { Product } from './../models/product.model';
import { FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  @Input() productFormData!: FormGroup
  @Input() productInformation!: Product
  @Input() buttonType!: string
  @Output() updateProduct: EventEmitter<Product> = new EventEmitter();
  // changed!:Product

  constructor() { }

  ngOnInit(): void {
    console.log(this.buttonType)
  }

  onSubmit() {
    let product: Product = {
      id: 0,
      productName: '',
      productPrice: 0,
      productMFD: ''
    }
    product = <Product>this.productFormData.value
    this.buttonType == 'Edit' ?
      this.updateProduct.emit(product)
      : this.updateProduct.emit(product);
  }
}
