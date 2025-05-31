import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuOpen = false;
  activeSection = 'home';
  
  navItems = [
    { name: 'Home', id: 'home', icon: 'fa-home' },
    { name: 'About', id: 'about', icon: 'fa-user-tie' },
    { name: 'Skills', id: 'skills', icon: 'fa-cogs' },
    { name: 'Projects', id: 'projects', icon: 'fa-code-branch' },
    { name: 'Contact', id: 'contacts', icon: 'fa-paper-plane' }
  ];

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollTo(id: string): void {
    this.activeSection = id;
    this.isMenuOpen = false;
    document.getElementById(id)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  }
}