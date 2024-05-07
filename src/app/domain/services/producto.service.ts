import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviromente } from '../enviroment/enviroment';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    return this.http.get<any>(`${enviromente.API_URL}/Producto`)
  }
  getDataName(productName:string):Observable<any>{
    return this.http.get<any>(`${enviromente.API_URL}/Producto/${productName}?name=${productName}`)
    //https://localhost:7047/api/Producto/te?name=te
  }
}
