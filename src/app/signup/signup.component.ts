import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  var2="Hello";
  constructor() { }

  cust:Customer=new Customer();
  custArray=new Array<Customer>();

saveData(){
  console.log(this.cust);
  this.custArray.push(this.cust);
  console.log(this.custArray);
  
  
}

  ngOnInit(): void {
  }

}
