import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { ExpComponent } from './exp/exp.component';
import { SkillComponent } from './skill/skill.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import { LinkedinComponent } from './extras/buttons/linkedin/linkedin.component';
import { GithubComponent } from './extras/buttons/github/github.component';
import { CurriculumComponent } from './extras/buttons/curriculum/curriculum.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, ExpComponent, ProjectComponent, SkillComponent, ContactComponent, LinkedinComponent, GithubComponent, CurriculumComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Axel Ledesma - Desarrollador Web';
}
