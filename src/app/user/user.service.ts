import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor( private http:HttpClient) { }
  listUser():Observable<any>
  {
    return this.http.get<any>('http://localhost:8083/provider/all') as Observable<any>
  }

  addUser( userdata:User): Observable<User> {
    return this.http.post<User>('http://localhost:8083/provider',userdata);
  }
  getUserId(id:number):Observable<User>
  {
    return this.http.get<User>('http://localhost:8083/provider/'+JSON.stringify(id))
  }
  update(id:number, userUpdate:User):Observable<any>{
return this.http.patch('http://localhost:8083/provider/updateProvider/'+JSON.stringify(id),userUpdate)
  }
  deleteUser(id:number):Observable<any>{
    return this.http.delete('http://localhost:8083/provider/'+JSON.stringify(id))

  }
}
