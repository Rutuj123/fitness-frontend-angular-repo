import { Component } from '@angular/core';
import { ClassService } from '../../user/classes/class.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-class-create',
  imports: [FormsModule],
  templateUrl: './class-create.html',
  styleUrl: './class-create.css',
})
export class ClassCreate {
constructor(private service:ClassService){}

c={name:"",trainer:"",schedule:"",capacity:""};
create(){
   this.service.createClass(this.c).subscribe(
   {
     next:()=>{alert("class created successfully")},
     error:()=>{alert("error")}
   }
  
  );
}
}
