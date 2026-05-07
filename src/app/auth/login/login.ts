import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private auth:AuthService,private router:Router){}
  data={username:'',password:''};
login(){ 
this.auth.login(this.data).subscribe(res=>{
  this.auth.saveAuth(res.token,res.role,res.userId.toString());
  if(res.role==='ADMIN'){
    this.router.navigate(['/admin']);
  }
  if(res.role==='TRAINER'){
    this.router.navigate(['/trainer']);
  }
  if(res.role==='USER'){
    this.router.navigate(['/userdashboard']);
  }
});
}
}
