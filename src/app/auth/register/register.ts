import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule,RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  constructor(private authservice:AuthService,private router:Router){}
data={name:"",username:"",password:"",phone:"",age:"",membershipType:"",role:""};
register(){
  this.authservice.register(this.data).subscribe({
  next:()=>{
    this.router.navigate(['/login']);
  },
  error:()=>{
   // console.log(this.err);
    alert("Error while restering")
  }
  });
}
}
