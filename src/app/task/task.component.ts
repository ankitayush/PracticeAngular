import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  img="";
  img1="./assets/JAGUAR_CAR.jpg";
  img2="./assets/VOLKSWAGEN_CAR.jpg";
  onClickChange(){

    this.img=this.img1;
    this.img1=this.img2;
    this.img2=this.img;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
