import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor() { }
  saveProduct(prodForm:any){
    console.log(prodForm.value);
    
  }

  ngOnInit(): void {
  }

}
