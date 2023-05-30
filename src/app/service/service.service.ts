import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Iproduct } from '../interface/product';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  getAll():Observable<Iproduct[]>{
    return this.http.get<Iproduct[]>(" http://localhost:3000/products")
  }
  getOne(id:number|string):Observable<Iproduct>{
    return this.http.get<Iproduct>(" http://localhost:3000/products/"+id)
  }
  deleteProduct(id:number|string):Observable<Iproduct>{
    return this.http.delete<Iproduct>(" http://localhost:3000/products/"+id)
  }
  update(data:Iproduct):Observable<Iproduct>{
    return this.http.put<Iproduct>(" http://localhost:3000/products/"+data.id,data)
  }
  addnew(data:Iproduct):Observable<Iproduct>{
    return this.http.post<Iproduct>(" http://localhost:3000/products",data)
  }
}
