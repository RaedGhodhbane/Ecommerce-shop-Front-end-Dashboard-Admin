import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent  implements OnInit{
dataUser: any;
selected:any[]=[]
trackUserItemById:any
toDeleted: any[]=[];
open: boolean=false;
constructor(private userService:UserService ,  private router:Router){

}
ngOnInit(): void {
this.getList()
}
getList(){
    this.userService.listUser().subscribe(data=>{
    this.dataUser=data
  })
}
selectionChanged(event:any){
console.log(" selected",this.selected)
this.toDeleted=[]
this.selected.map(x=> this.toDeleted.push(x.id))
console.log('> this.toDeleted', this.toDeleted)
 
}
update(){
  this.router.navigateByUrl('/user/update-user/'+String(this.selected[0].id))
}
openAction(){
  this.open=true
}
closeAction(){
  this.open=!this.open
}
saveAction(){
     this.getList()
    this.selected=[]
    this.open=!this.open


}
}
