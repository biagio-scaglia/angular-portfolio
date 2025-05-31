import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  hardSkills = [
    { name: 'HTML5', icon: 'fab fa-html5' },
    { name: 'CSS3', icon: 'fab fa-css3-alt' },
    { name: 'JavaScript', icon: 'fab fa-js-square' },
    { name: 'TypeScript', icon: 'fas fa-code' },
    { name: 'Angular', icon: 'fab fa-angular' },
    { name: 'PHP', icon: 'fab fa-php' },
    { name: 'MySQL', icon: 'fas fa-database' },
    { name: 'Tailwind', icon: 'fas fa-wind' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
    { name: 'REST API', icon: 'fas fa-network-wired' },
    { name: 'Git', icon: 'fab fa-git-alt' },
    { name: 'Responsive', icon: 'fas fa-mobile-screen' }
  ];

  softSkills = [
    { name: 'Problem Solving', icon: 'fas fa-puzzle-piece' },
    { name: 'Teamwork', icon: 'fas fa-users' },
    { name: 'Creatività', icon: 'fas fa-lightbulb' },
    { name: 'Comunicazione', icon: 'fas fa-comments' },
    { name: 'Adattabilità', icon: 'fas fa-sync-alt' },
    { name: 'Time Management', icon: 'fas fa-clock' },
    { name: 'Apprendimento', icon: 'fas fa-book-open' },
    { name: 'Leadership', icon: 'fas fa-flag' },
    { name: 'Empatia', icon: 'fas fa-heart' }
  ];
}