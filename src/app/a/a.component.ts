import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrl: './a.component.css'
})
export class AComponent  implements OnInit{
  name:string='hajer'
  a:number=13
  b:number=44
  x!:number
  test=true
  listString:string[]=[]
  listNumber:number[]=[]
  liste:any= ['apple', 'banana', 'cherry'];
  constructor(){

  }
ngOnInit(): void {
    console.log(String(this.a))
    console.log("this.b.toString()",this.b.toString())
       console.log('x',this.x)
       this.x=4
       if (this.b>this.a){
        console.log("hello")
       }else{
        console.log("bonjour")
       }
       console.log(" condition",this.b>this.a?'helllo2':"bonjour2")
 console.log("xvalue",this.x)

}
onClick(){
  this.test=!this.test
  for (let i = 0; i < this.liste.length; i++) {
    this.listString.push(this.liste[i])
    this.listNumber.push(i)
    
  console.log(this.liste[i]);
}
console.log(" string",this.listNumber)
console.log(" number",this.listString)

}
}
