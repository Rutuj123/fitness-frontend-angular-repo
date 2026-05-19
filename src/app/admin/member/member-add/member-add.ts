import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-add',
  imports: [FormsModule],
  templateUrl: './member-add.html',
  styleUrl: './member-add.css',
})
export class MemberAdd {
 constructor(private memberService:MemberService,private router:Router){} 
member={name:"",username:"",password:"",phone:"",age:"",membershipType:""};
addMember(){
    this.memberService.addMember(this.member).subscribe({
       next:()=>{
 // this.router.navigate(['/member-list']);
 alert('Member created successfully');
       },
       error:()=>{
  alert('Something Went Wrong');
       }
    })
}
}
