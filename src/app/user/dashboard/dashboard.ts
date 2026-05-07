import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
features = [
 // { title: 'Gym Facilities', desc: 'Equipment & amenities', link: '/user/facilities' },
  { title: 'Gym Classes', desc: 'Equipment & amenities', link: '/user/classes' },
  { title: 'Trainers', desc: 'Meet our trainers', link: '/user/trainers' },
  { title: 'Membership Plans', desc: 'Choose your plan', link: '/user/plans' }
];

}
