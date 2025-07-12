import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'project1';
  // test:boolean=false;
  // //list:string[]=['Tunis', 'Paris', 'New York']
  // list:any[]=[
  //   {"name": "hajer", "age": 28, "city":'Tunis'},
  //   {"name": "ahmed", "age": 10, "city":'Djerba'},
  //   {"name": "ali", "age": 30, "city":'Gabes'}
  // ]
  // role:string='admin'
  // change() {
  //   this.test = !this.test;
  // }
  styleWelcome={
  color:'red',
  fontSize: '32px',
  backgroundColor: 'burlywood'
  }
  color='red'
  classBlue='styleBlue'
  classGreen='styleGreen'
  classRed='styleRed'
  classList='classUl'
  isError=true
  isLarge=false
 isSuccess=false
  styleGoodbye={
  color:'rgb(8, 224, 163)',
  fontSize: '32px',
  backgroundColor: 'rgb(140, 2, 219)'
  }
  welcomeTest:boolean=false 
  greeting="welcome"
  change(){
 
    if( this.greeting=='welcome')
    {
      this.greeting='goodBye'
    }
    else{
     this.greeting='welcome' 
    }
    this.welcomeTest=!this.welcomeTest
  }
changeClass(){
  this.isError=!this.isError
  this.isLarge=!this.isLarge
  this.isSuccess=!this.isSuccess
}
changeBlue(){
  this.color='blue'
}
changeRed(){
  this.color='red'
}
changeGreen(){
  this.color='green'
}
}
