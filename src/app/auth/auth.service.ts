import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { isTokenExpired } from './auth.util';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //private API = 'http://localhost:8080/auth';
    private API = 'http://localhost:8080/auth';
  constructor(private http:HttpClient,private router:Router){}
  login(data:any){
    return this.http.post<any>(`${this.API}/login`,data);
  }
  register(data:any){
   return  this.http.post<any>(`${this.API}/register`,data);
  }

  saveAuth(token:string,role:string,userId:string){
    localStorage.setItem('token',token);
    localStorage.setItem('role',role);
    localStorage.setItem('userId',userId);

  }
  getToken(){
    
    return localStorage.getItem('token');
  }
  logout(){
    localStorage.clear;
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }  
  isLoggedIn():boolean{
return !isTokenExpired();
  }

}
