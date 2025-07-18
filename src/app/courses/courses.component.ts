import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-courses',
  imports: [NgFor, RouterModule],

  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent {
  title = 'Explore Our Top Courses';
  courses = [
    {
      id: 1,
      name: 'Web Development Bootcamp',
      description:
        'Master full-stack web development with modern technologies like React, Angular, and Node.js.',
      duration: '12 Weeks',
    },
    {
      id: 2,
      name: 'Data Science & AI',
      description:
        'Learn data analysis, machine learning, and AI model building using Python.',
      duration: '16 Weeks',
    },
    {
      id: 3,
      name: 'Mobile App Development',
      description:
        'Build cross-platform mobile apps with Flutter and React Native.',
      duration: '10 Weeks',
    },
    {
      id: 4,
      name: 'Cybersecurity Fundamentals',
      description:
        'Understand network security, threat analysis, and ethical hacking techniques.',
      duration: '8 Weeks',
    },
    {
      id: 5,
      name: 'Cloud Computing with AWS',
      description:
        'Explore cloud infrastructure, storage, and deployment strategies with AWS.',
      duration: '14 Weeks',
    },
  ];
}
