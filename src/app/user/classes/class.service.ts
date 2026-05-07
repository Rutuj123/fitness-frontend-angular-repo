import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClassService {
  private API="http://localhost:8084/classes";
  constructor(private http:HttpClient){};
 
  getAll(){
    return this.http.get<any[]>(`${this.API}`)
  }
  book(classId:number){
    return this.http.post(`${this.API}/${classId}/book`,{},{headers:{userId:'1'}});  // later from JWT
  }
  createClass(data:any){
    const token = localStorage.getItem('token');

  /*   const headers = new HttpHeaders ({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }); */
   return this.http.post(`${this.API}`,data);  //,{headers}
  }

}
