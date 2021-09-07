import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit {

  myarr=["Audi","BMW","MG","JAGUAR","BOLERO","PORSCHE","FERRARI"];
  payment="";
  banks=["SBI","ICICI","HDFC","DBS","HSBC","IDBI","DENA"];
  selecteditem="";
  selectedbank="";
  mynewarr: Array<string> =[];

  onClick(){
    if(this.mynewarr.indexOf(this.selecteditem)==-1){
      this.mynewarr.push(this.selecteditem);
    }
    
  }
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
