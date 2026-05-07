import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  constructor(private authservice:AuthService,private router:Router){}
data={username:'',password:'',role:''}
register(){
  this.authservice.register(this.data).subscribe({
  next:()=>{
    this.router.navigate(['/login']);
  },
  error:()=>{
    alert("Error while restering")
  }
  });
}
}
