import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-home',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './user-home.html',
  styleUrl: './user-home.css',
})
export class UserHome {
mobileMenu = false;
toggleMenu() {
    this.mobileMenu = !this.mobileMenu;
  }
closeMenu() {
  this.mobileMenu = false;
}
}
