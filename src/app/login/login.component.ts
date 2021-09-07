import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

txt1="Hello";
txt2:string="Everyone";
txt3:string;

username="ankit";
userpassword="123";
userrole="";
id="";
password="";
spanStyle="";
errormsg="";

td=Date();

myArr=["Apple","Banana","Grapes"];

product={
  prodid:100,
  name:"Soap",
  price:27
};



  constructor() {
    this.txt3="Good Morning";
    this.myArr.push("Lemon");
   }

  ngOnInit(): void {
    for(let k of this.myArr){
      console.log(k);
    }
  }

  loginbuttonClicked(){
    console.log(this.userrole);
    if(this.username==this.id && this.password==this.userpassword){
        this.errormsg="Hello "+this.userrole;
        this.spanStyle="color:green";
    }
    else{
      this.spanStyle="color:red";
      this.errormsg="Invalid User";
    }
    
    
  }

  

}
