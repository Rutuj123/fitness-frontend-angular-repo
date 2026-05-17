import { Component } from '@angular/core';

@Component({
  selector: 'app-our-trainers',
  imports: [],
  templateUrl: './our-trainers.html',
  styleUrl: './our-trainers.css',
})
export class OurTrainers {
mobileMenu = false;

  toggleMenu() {
    this.mobileMenu = !this.mobileMenu;
  }

closeMenu() {
  this.mobileMenu = false;
}
}
