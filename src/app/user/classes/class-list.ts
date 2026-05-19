import { Component } from '@angular/core';
import { ClassService } from './class.service';

import { routes } from '../../app.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-class-list',
  imports: [],
  templateUrl: './class-list.html',
  styleUrl: './class-list.css',
})
export class ClassList {
  classes: any[]=[];
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
  this.service.book(id).subscribe(()=>alert('Class booked successfully'));
}
makePayment(){
this.router.navigate(['/payment']);
}
}
