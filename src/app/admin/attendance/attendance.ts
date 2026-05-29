import { Component } from '@angular/core';
import { AttendanceService } from '../../services/attendance-service';
import { MemberService } from '../member/member.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-attendance',
  imports: [CommonModule],
  templateUrl: './attendance.html',
  styleUrl: './attendance.css',
})
export class Attendance {
members:any[]=[];

constructor(
 private attendanceService:AttendanceService,private memberService: MemberService
){}
loading=true;
ngOnInit(): void {
this.loadMembers();
}
loadMembers(){
  this.memberService.getAllMember().subscribe({
    next:data=>{
      this.members=data;
      this.loading=false;
    },
    error:()=>{
      alert("Failed to load members");
      this.loading=false;
    }
  })
}
markPresent(member:any){

   const data = {

      memberId : member.id,

      status : "PRESENT"
   };

   this.attendanceService
       .markAttendance(data)
       .subscribe({
      next:(res:any)=>{
      console.log(res);
   alert(res.message);
      },
     error:(err)=>{
  
   alert('Something went wrong..');
  
    }
       });
}

markAbsent(member:any){

   const data = {

      memberId : member.id,

      status : "ABSENT"
   };

   this.attendanceService
       .markAttendance(data)
       .subscribe((response)=>{

          alert(response);
       });
}
}
