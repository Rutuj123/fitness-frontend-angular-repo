import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';
@Injectable({
  providedIn: 'root',
})
export class PaymentService {
 private API = environment.apiUrl;
  constructor(private http: HttpClient){}
  makePayment(formData: FormData): Observable<any>{
    return this.http.post(`${this.API}/payments/pay`,formData);
  }
  updatePaymentStatus(data:any,id: number) {

  return this.http.put(
    `${this.API}/payments/updatePaymentStatus/${id}`,
    data
  );

}

getAllPayment(){
const token = localStorage.getItem('token');
 const headers = new HttpHeaders ({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
 
  return this.http.get<any[]>(`${this.API}/payments`,{headers});
}
}
