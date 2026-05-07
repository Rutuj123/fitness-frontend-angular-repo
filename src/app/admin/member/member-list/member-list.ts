import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-member-list',
  imports: [CommonModule],
  templateUrl: './member-list.html',
  styleUrl: './member-list.css',
})
export class MemberList implements OnInit{
constructor(private memberservice: MemberService){}
members:any[]=[];
loading=true;
ngOnInit(): void {
  this.memberservice.getAllMember().subscribe({
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
}
