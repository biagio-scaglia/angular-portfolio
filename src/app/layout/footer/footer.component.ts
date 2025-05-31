import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  footerLinks = [
    { 
      title: 'Esplora', 
      links: [
        { name: 'Home', icon: 'fa-chevron-right', url: '#home' },
        { name: 'About', icon: 'fa-chevron-right', url: '#about' },
        { name: 'Skills', icon: 'fa-chevron-right', url: '#skills' },
        { name: 'Projects', icon: 'fa-chevron-right', url: '#projects' }
      ] 
    }
  ];

  socialLinks = [
    { name: 'LinkedIn', icon: 'fa-brands fa-linkedin-in', url: '#' },
    { name: 'GitHub', icon: 'fa-brands fa-github', url: 'https://github.com/biagio-scaglia' },
    { name: 'Twitter', icon: 'fa-brands fa-twitter', url: '#' },
    { name: 'Instagram', icon: 'fa-brands fa-instagram', url: '#' }
  ];

  contactInfo = [
    { icon: 'fa-envelope', text: 'biagioscaglia01@gmail.com' },
    { icon: 'fa-phone-alt', text: '351 315 0134' },
    { icon: 'fa-map-marker-alt', text: 'Milano, Italia' },
    { icon: 'fa-globe', text: 'biagioscaglia.com' }
  ];
}
