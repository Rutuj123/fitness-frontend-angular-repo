import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TrainerService {
  private API = 'http://localhost:8080/trainers';
  constructor(private http:HttpClient){}
  create(data:any){
    return this.http.post<any>(`${this.API}`,data);
  }
  getAll(){
    return this.http.get<any[]>(`${this.API}`);
  }
}
