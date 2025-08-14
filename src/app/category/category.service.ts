import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

    listCategory():Observable<any>
  {
    return this.http.get<any>('http://localhost:8083/productCategory') as Observable<any>
  }
  addCategory(categoryData:Category): Observable<Category> {
    return this.http.post<Category>('http://localhost:8083/productCategory',categoryData);
  }

  getCategoryId(id:number):Observable<Category>
    {
      return this.http.get<Category>('http://localhost:8083/productCategory/'+JSON.stringify(id))
    }

  updateCategory(id:number, categoryUpdate:Category):Observable<any>{
  return this.http.put('http://localhost:8083/productCategory/'+JSON.stringify(id),categoryUpdate)
    }
    
  deleteCategory(id:number):Observable<any>{
    return this.http.delete('http://localhost:8083/productCategory/'+JSON.stringify(id))

  }
}
