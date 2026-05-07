import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
constructor(private auth : AuthService,private router : Router){}
logout(){
  this.auth.logout();
  this.router.navigate(['/login']);
}
}
