import { DatePipe } from '@angular/common';
import { Product } from './../models/product.model';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  product!: Product;
  selectedButton = '';
  products: Product[] = [
    { id: 1, productName: 'Lenovo', productPrice: 40000, productMFD: '2022-05-16' },
    { id: 2, productName: 'DELL', productPrice: 60000, productMFD: '2022-20-05' },
    { id: 3, productName: 'i-ball', productPrice: 450000, productMFD: '2022-25-05' }
  ]
  productForm!: FormGroup
  productInformation: any
  constructor(private formBuilder: FormBuilder, public datePipe: DatePipe) { }
  ngOnInit(): void {
    this.productForm = new FormGroup({
      productName: new FormControl(''),
      productPrice: new FormControl(''),
      productMFD: new FormControl('')
    });
  }
  onEdit(buttonName: string, productInfo: Product) {
    this.selectedButton = buttonName;
    console.log(this.selectedButton);

    this.productInformation = productInfo
    this.productForm.patchValue({
      productName: productInfo.productName,
      productPrice: productInfo.productPrice,
      productMFD: productInfo.productMFD

    })
    console.log(this.productForm.value)
  }
  onSelectView(buttonName: string, productData: Product) {
    this.selectedButton = buttonName;
    this.productInformation = productData;
  }
  closeView() {
    this.productForm.patchValue({
      productName: '',
      productPrice: '',
      productMFD: ''
    });
    this.selectedButton = ""
  }
  onSelectAddProducts(buttonName: string) {
    this.selectedButton = buttonName;
  }

  recieveProducts(event: any, buttonName: string) {
    buttonName == 'Add Products' ?
      this.products.push(event) :
      (this.products[this.products.findIndex((val) => val == this.productInformation)] = event)
  }
  onDelete(buttonName: string, productData: Product) {
    this.products.forEach((element, index) => {
      if (element == productData) this.products.splice(index, 1);
    });
    // this.product = this.products.filter((val) => val == this.productInformation)
    // this.products[this.products.findIndex((val) => val == this.productInformation)] = productData
  }
}
