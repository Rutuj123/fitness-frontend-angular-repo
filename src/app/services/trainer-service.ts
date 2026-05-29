import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class TrainerService {
  private API = environment.apiUrl;
  constructor(private http:HttpClient){}
  create(data:any){
    return this.http.post<any>(`${this.API}/trainers`,data);
  }
  getAll(){
    return this.http.get<any[]>(`${this.API}/trainers`);
  }
  getMembershipGrowth(){
    return this.http.get(`${this.API}/trainers/membership-growth`);
  }

  getVisitorStats(){
    return this.http.get(`${this.API}/visitor/visitor-stats`);
  }
}
