import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesproductService {

  constructor(private http:HttpClient) { }
  getAllCategories():Observable<any>{
    return this.http.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  }

}
