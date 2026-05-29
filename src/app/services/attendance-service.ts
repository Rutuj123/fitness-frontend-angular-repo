import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AttendanceService {
  private API = environment.apiUrl;
    constructor(private http:HttpClient){}
  markAttendance(data:any){

   return this.http.post(`${this.API}/members/markAttendance`,data);

}
}
