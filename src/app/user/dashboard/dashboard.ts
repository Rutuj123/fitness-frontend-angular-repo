
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  mobileMenu = false;
toggleMenu() {
    this.mobileMenu = !this.mobileMenu;
  }
closeMenu() {
  this.mobileMenu = false;
}
features = [
 // { title: 'Gym Facilities', desc: 'Equipment & amenities', link: '/user/facilities' },
  /* { title: 'Gym Classes', desc: 'Equipment & amenities', link: '/user/classes' },
  { title: 'Trainers', desc: 'Meet our trainers', link: '/user/trainers' },
  { title: 'Membership Plans', desc: 'Choose your plan', link: '/user/plans' } */
];

}
