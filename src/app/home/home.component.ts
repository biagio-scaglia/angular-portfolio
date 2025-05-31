import { Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { SkillsComponent } from "../skills/skills.component";
import { ProjectsComponent } from '../projects/projects.component';
import { ContactsComponent } from '../contacts/contacts.component';

@Component({
  selector: 'app-home',
  imports: [AboutComponent, SkillsComponent, ProjectsComponent, ContactsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
