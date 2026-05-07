import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PaymentService } from './payment-service';
import { CreatePaymentRequest } from './payment.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  imports: [FormsModule],
  templateUrl: './payment.html',
  styleUrl: './payment.css',
})
export class Payment implements OnInit{
plan!:string;  
amount!:number;
paymentMethod: 'UPI' | 'CARD' | 'CASH'='UPI'

constructor(private paymentService:PaymentService,private router:ActivatedRoute){}

ngOnInit(): void {
  this.router.queryParams.subscribe(params=>{
    this.plan=params['plan'],
    this.amount=params['price']
  })
}

pay(){
   console.log(localStorage);
  const request:CreatePaymentRequest={
   
    
    memberId: Number(localStorage.getItem('userId')),
    amount: this.amount,
    paymentMethod:this.paymentMethod
  }
  this.paymentService.makePayment(request).subscribe({
   next:()=>alert("Payment Successful"),
   error:()=>alert("Payment Failed ❌")
  })
}

}
