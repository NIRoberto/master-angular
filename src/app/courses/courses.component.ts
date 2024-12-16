import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-courses',
  imports: [NgFor],

  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent {
  title = 'List of courses';
  courses = ['course1', 'course2', 'course3'];
}
