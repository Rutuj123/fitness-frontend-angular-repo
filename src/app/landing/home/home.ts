import { Component,HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
mobileMenu = false;

  toggleMenu() {
    this.mobileMenu = !this.mobileMenu;
  }

closeMenu() {
  this.mobileMenu = false;
}

 isScrolled = false;

  @HostListener('window:scroll')
  onWindowScroll() {

    if (window.scrollY > 50) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }

  }
}
