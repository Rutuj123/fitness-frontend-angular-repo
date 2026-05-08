import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  constructor(private http: HttpClient){}
 // private  apiUrl="http://localhost:8080/members";
   private API = environment.apiUrl;
   token=localStorage.getItem("token");
   
addMember(data:any){
  const token = localStorage.getItem('token');

    const headers = new HttpHeaders ({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

  console.log("token "+this.token);
  
  return this.http.post<any>(`${this.API}/members/addMember`,data,{headers});
}
getAllMember(){
  const token = localStorage.getItem('token');

    const headers = new HttpHeaders ({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

  console.log("token "+this.token);
  return this.http.get<any[]>(`${this.API}/members/getAll`,{headers});
}
}
