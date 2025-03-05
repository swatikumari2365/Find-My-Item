import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
      navLinks.classList.toggle('active');
    }
  }
}
