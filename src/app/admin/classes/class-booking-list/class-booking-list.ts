import { Component, OnInit } from '@angular/core';
import { ClassService } from '../../../user/classes/class.service';

@Component({
  selector: 'app-class-booking-list',
  imports: [],
  templateUrl: './class-booking-list.html',
  styleUrl: './class-booking-list.css',
})
export class ClassBookingList implements OnInit{
  constructor(private classService : ClassService){}  
  bookingList:any[]=[];
  loading=false;
  m:any[]=[];
ngOnInit(): void {

  this.classService.getAllBooking().subscribe({
    next:(data)=>{
      this.bookingList=data;
      this.loading=false;
    },
    error:()=>{
       //alert("Failed to load booking list");
      this.loading=false;
    }
  })
}
approve(m:any){
  console.log(m);
  console.log("in approve");
  this.classService.updatedClassBookingStatus(m,"APPROVED").subscribe({
    
    next:(res:any)=>{
      alert(res.message);
      this.ngOnInit();
    },
    error:()=>{
      alert("Failed to update booking status");
    }
  })
}
reject(m:any){
  this.classService.updatedClassBookingStatus(m,"REJECTED").subscribe({
    next:(res:any)=>{
      alert(res.message);
      this.ngOnInit();
    },
    error:()=>{
      alert("Failed to update booking status");
    }
  })
}
}