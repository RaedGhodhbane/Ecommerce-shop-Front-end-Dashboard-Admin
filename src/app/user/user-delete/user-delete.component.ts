import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrl: './user-delete.component.css'
})
export class UserDeleteComponent  implements OnInit{
  @Input('listeId')
  listeId:number[]=[]
  @Output()
  close= new EventEmitter<boolean>()
  @Output()
  save= new EventEmitter<boolean>()
  constructor(private userService:UserService){}
ngOnInit(): void {
  
}
 closed(){
  this.close.emit(true)
 }
 saved(){
  this.listeId.forEach(element=>{
    this.userService.deleteUser(element).subscribe(data=>{
      console.log("data",data)
                this.save.emit(true)

    })

  })


 }
}
