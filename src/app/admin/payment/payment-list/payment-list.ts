import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../../user/payment/payment-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment-list',
  imports: [FormsModule],
  templateUrl: './payment-list.html',
  styleUrl: './payment-list.css',
})
export class PaymentList implements OnInit{
constructor(private memberService: PaymentService){}
payments:any[]=[];
loading=true;
ngOnInit(): void {
  this.memberService.getAllPayment().subscribe({
    next:data=>{
      this.payments=data;
      this.loading=false;
    },
    error:()=>{
      alert("Failed to load members");
      this.loading=false;
    }
  })
}

showEditModal = false;

showDeleteModal = false;

selectedPayment: any = {};

deleteMemberId!: number;
approve(payments: any) {

  this.selectedPayment = { ...this.payments };

 console.log(this.selectedPayment);

   this.memberService.updatePaymentStatus(this.selectedPayment,1).subscribe({
       next:()=>{
 // this.router.navigate(['/member-list']);
 alert('Payment status updated successfully');
       },
       error:()=>{
  alert('Something Went Wrong');
       }
    })
 

}
reject(id: number) {

  this.deleteMemberId = id;

  this.showDeleteModal = true;

}

closeModal() {

  this.showEditModal = false;

}
updatePaymentStatus() {

  console.log(this.selectedPayment);

   this.memberService.updatePaymentStatus(this.selectedPayment,1).subscribe({
       next:()=>{
 // this.router.navigate(['/member-list']);
 alert('Payment edited successfully');
       },
       error:()=>{
  alert('Something Went Wrong');
       }
    })
 

  this.showEditModal = false;

}
confirmDelete(id: number) {

  this.deleteMemberId = id;

  this.showDeleteModal = true;

}

closeDeleteModal() {

  this.showDeleteModal = false;

}

deleteMember() {

  console.log(this.deleteMemberId);

  // CALL DELETE API HERE

  this.showDeleteModal = false;

}

}
