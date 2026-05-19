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
paymentMethod: 'UPI' | 'CARD' | 'CASH'='UPI';
 memberId:number= Number(localStorage.getItem('userId'));
constructor(private paymentService:PaymentService,private router:ActivatedRoute){}
  selectedFile!: File;
  utrNumber = '';
  onFileSelected(event: any) {

  this.selectedFile = event.target.files[0];
}
ngOnInit(): void {
  this.router.queryParams.subscribe(params=>{
    this.plan=params['plan'],
    this.amount=params['price']
  })
}

pay(){
   console.log(localStorage);
 const formData = new FormData();
  formData.append('file', this.selectedFile);

  formData.append('utrNumber', this.utrNumber);

  formData.append('memberId', this.memberId.toString());

  formData.append('paymentMethod', this.paymentMethod);

  formData.append('amount', this.amount.toString());
  this.paymentService.makePayment(formData).subscribe({
   next:()=>alert("Payment Successful"),
   error:()=>alert("Payment Failed ❌")
  })
}

}
