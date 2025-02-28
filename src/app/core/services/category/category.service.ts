import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  getAllCategory():Observable<any>{
    return this.http.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  }
}
