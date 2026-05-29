import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ClassService } from '../class.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-class-available-list',
  imports: [],
  templateUrl: './class-available-list.html',
  styleUrl: './class-available-list.css',
})
export class ClassAvailableList {
classes: any[]=[];
userId:number=Number(localStorage.getItem("userId"));
paidUser = true; // later from token
role=localStorage.getItem('role');
bookButton=false;
constructor(private service:ClassService,private router: Router){
 if(this.role=="USER"){
  this.bookButton=true;
   }
  this.service.getAll().subscribe(data=>this.classes=data);
}

book(id:number){
  this.service.book(id,this.userId).subscribe({
    next:(res:any)=>{
     
      alert(res.message);
      },
     error:()=>{
       alert('Something Went Wrong');
     } 

    });
  }
makePayment(){
this.router.navigate(['/payment']);
}
}
