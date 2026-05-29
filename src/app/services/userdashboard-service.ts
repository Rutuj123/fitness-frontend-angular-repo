import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class UserdashboardService {
  private API = environment.apiUrl;
    constructor(private http:HttpClient){}
    getDashboard(userId:any){
  return this.http.get(
    `${this.API}/members/dashboard/${userId}`
  );
}

getPerMonthAttendance(userId:any){
return this.http.get(`${this.API}/members/getPerMonthAttendance/${userId}`);
}
}
