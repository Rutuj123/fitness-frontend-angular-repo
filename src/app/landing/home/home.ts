import { HttpClient } from '@angular/common/http';
import { Component,HostListener, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../../environment/environment';


@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit{
 constructor(private http: HttpClient) {}
mobileMenu = false;
count:number=0;
private API = environment.apiUrl;
ngOnInit(): void {
   const alreadyVisited = localStorage.getItem("visited");
//if(!alreadyVisited){

      this.http.post(`${this.API}/visitor/track`, {})
      .subscribe();

      localStorage.setItem("visited", "true");
  // }

}

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
