import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-member-list',
  imports: [FormsModule],
  templateUrl: './member-list.html',
  styleUrl: './member-list.css',
})
export class MemberList implements OnInit{
constructor(private memberService: MemberService){}
members:any[]=[];
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

showEditModal = false;

showDeleteModal = false;

selectedMember: any = {};

deleteMemberId!: number;
openEditModal(member: any) {

  this.selectedMember = { ...member };

  this.showEditModal = true;

}

closeModal() {

  this.showEditModal = false;

}
updateMember() {

  console.log(this.selectedMember);

   this.memberService.updateMember(this.selectedMember).subscribe({
       next:()=>{
 // this.router.navigate(['/member-list']);
 alert('Member edited successfully');
 this.loadMembers();
       },
       error:(err)=>{
        console.log(err);
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

  this.memberService.deleteMember(this.deleteMemberId).subscribe({
    next:(res)=>{
      console.log(res);
   alert('Member deleted successfully');
   this.loadMembers();
    },
    error:(err)=>{
      console.log(err);
   alert('Something went wrong..');
   this.loadMembers();
    }
  })

  this.showDeleteModal = false;

}
}
