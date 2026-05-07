import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreatePaymentRequest } from './payment.model';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private API='http://localhost:8085/payments';
  constructor(private http: HttpClient){}
  makePayment(data:CreatePaymentRequest): Observable<any>{
    return this.http.post(`${this.API}/pay`,data);
  }
}
