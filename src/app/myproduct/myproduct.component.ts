import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
@Component({
  selector: 'app-myproduct',
  templateUrl: './myproduct.component.html',
  styleUrls: ['./myproduct.component.css']
})
export class MyproductComponent implements OnInit {

  constructor() { }

  prod:Product=new Product();

  productArr:Array<Product>=[];
  categories=["Grocery","Electronics","Fashion","Utilities","BeautyandHealth"];

  
  saveProduct(prodForm:any){
    console.log(prodForm.value);
    this.productArr.push(prodForm.value);
    var index=this.productArr.indexOf(prodForm.value);
    console.log(this.productArr);
    
    
  }

   itemDelete(i:any){
    this.productArr.splice(i,1);
   }

  ngOnInit(): void {
  }

}
