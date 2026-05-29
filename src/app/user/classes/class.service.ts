import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ClassService {
  private API = environment.apiUrl;
  constructor(private http:HttpClient){};
 
  getAll(){
    return this.http.get<any[]>(`${this.API}/classes`)
  }
  book(classId:number,userId:number){
    return this.http.post(`${this.API}/classes/book/${classId},${userId}`,{});  // later from JWT
  }
  createClass(data:any){
    const token = localStorage.getItem('token');

  /*   const headers = new HttpHeaders ({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }); */
   return this.http.post(`${this.API}/classes`,data);  //,{headers}
  }
   getAllBookingBasedOnUserId(userId:number){
    return this.http.get<any[]>(`${this.API}/classes/bookingListByUserId/${userId}`);
  }
  updatedClassBookingStatus(m:any,status:string){
    return this.http.post(`${this.API}/classes/updateClassBookingStatus/${status}`,m);
  }
  getAllBooking(){
    return this.http.get<any[]>(`${this.API}/classes/bookingList`);
  }

}
