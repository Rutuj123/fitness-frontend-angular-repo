import { Component, OnInit } from '@angular/core';
import { ClassService } from '../class.service';

@Component({
  selector: 'app-class-booking-list',
  imports: [],
  templateUrl: './class-booking-list.html',
  styleUrl: './class-booking-list.css',
})
export class ClassBookingList implements OnInit{
 constructor(private classService : ClassService){} 
loading=true;
isAdmin=false;
bookingList:any[]=[];
userId:number=Number(localStorage.getItem("userId"));
role :string=String(localStorage.getItem("role"));
selectedBooking:any={};
ngOnInit(): void {
  if(this.role=="USER"){
  this.classService.getAllBookingBasedOnUserId(this.userId).subscribe({
    next:data=>{
      this.bookingList=data;
      this.loading=false;
    },
    error:()=>{
       //alert("Failed to load booking list");
      this.loading=false;
    }
  })
}else if(this.role=="ADMIN"){
  this.isAdmin=true;
  this.classService.getAll().subscribe({
    next:data=>{
      this.bookingList=data;
      this.loading=false;
    },
    error:()=>{
      alert("Failed to load booking list");
      this.loading=false;
    }
  })
}
}
approve(bookingList: any) {

  this.selectedBooking = { ...this.bookingList};

 console.log(this.selectedBooking);

   this.classService.updatedClassBookingStatus(this.selectedBooking.id,"PENDING").subscribe({
    next:()=>{
      alert("Status updated Successfully..");
    },
    error:()=>{
     alert("Something went wrong..");
    }
   })
}
reject(bookingList:any) {
  this.selectedBooking={...this.bookingList};
this.classService.updatedClassBookingStatus(this.selectedBooking.id,"REJECTED").subscribe({
  next:()=>{
    alert("Status updated Successfully..");
  },
  error:()=>{
   alert("Something went wrong.."); 
  }
})

}
}
