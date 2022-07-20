import { Product } from './../models/product.model';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


  productsList: Product[] = [];
  productForm!: FormGroup;
  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      productName: new FormControl(''),
      productPrice: new FormControl(''),
      productMFD: new FormControl('')
    });
  }

  onSubmit() {

    let product: Product = {
      id: 0,
      productName: '',
      productPrice: 0,
      productMFD: ''
    }
    product = <Product>this.productForm.value
    this.productsList.push(product)
    console.log(this.productsList);

  }

}
