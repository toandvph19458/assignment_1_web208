import { Injectable } from '@angular/core';
import { Iproduct } from '../interfaces/product'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) {

   }
   getallProduct():Observable<Iproduct[]>{
    return this.http.get<Iproduct[]>("http://localhost:3000/products")
  }
  deleteProduct(id:number|string):Observable<Iproduct[]>{
    return this.http.delete<Iproduct[]>("http://localhost:3000/products/"+id)
  }
  getOne(id:number|string):Observable<Iproduct>{
    return this.http.get<Iproduct>("http://localhost:3000/products/"+id)
  }
  addProduct(data:Iproduct):Observable<Iproduct[]>{
    return this.http.post<Iproduct[]>("http://localhost:3000/products",data)
  }
  updateProduct(data:Iproduct):Observable<Iproduct[]>{
    return this.http.put<Iproduct[]>("http://localhost:3000/products/"+data.id,data)
  }
}
