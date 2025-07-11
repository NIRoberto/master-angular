import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterOutlet, RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CoursesComponent,
    NgFor,
    RouterLink,
    RouterLinkActive,
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'master-angular';
}
