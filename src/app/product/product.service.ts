import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:8080/product';
  constructor(private http: HttpClient) { }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  getProductByStatusId(id: number, page: number, size: number): Observable<Product> {
    return this.http.get<Product>(this.apiUrl+'/bystatus/${id}/${page}/${size}');
  }


 

  
}
