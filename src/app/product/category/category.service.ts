import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductCategory } from './category';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  private apiUrl = 'http://localhost:8083/productCategory'; 

  constructor(private http: HttpClient) {}

  // GET all categories
  getProductCategoryList(): Observable<ProductCategory[]> {
    return this.http.get<ProductCategory[]>(this.apiUrl);
  }

  // GET category by ID
  getProductCategoryById(id: number): Observable<ProductCategory> {
    return this.http.get<ProductCategory>(this.apiUrl+'/'+JSON.stringify(id));
  }

  // POST: Create new category
  createProductCategory(category: ProductCategory): Observable<ProductCategory> {
    return this.http.post<ProductCategory>(this.apiUrl, category);
  }

  // PUT: Update category
  updateProductCategory(id: number, category: ProductCategory): Observable<ProductCategory> {
    return this.http.put<ProductCategory>(`${this.apiUrl}/${id}`, category);
  }

  // DELETE: Delete category by ID
  deleteProductCategory(id: number): Observable<string> {
    return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
  }
}
