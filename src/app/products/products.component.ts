import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  prod:Product=new Product();
  categories=["Grocery","Electronics","Fashion","Utilities","BeautyandHealth"];

  
  prodForm=new FormGroup({
    prodid:new FormControl(),
    prodname:new FormControl(),
    price:new FormControl(),
    category:new FormControl()

  })

  saveData(){
    console.log(this.prodForm.value);
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
