import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

interface Course {
  id: number;
  name: string;
  description: string;
  duration: string;
}

@Component({
  selector: 'app-courses-details',
  imports: [],
  templateUrl: './courses-details.component.html',
  styleUrl: './courses-details.component.css',
})
export class CoursesDetailsComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}

  course: Observable<Course | undefined> | undefined;
  courseId: number | string | any;
  courseDetails: Course | undefined;

  ngOnInit() {
    this.courseId = this.route.snapshot.paramMap.get('id');
    console.log(this.courseId);
    this.courseDetails = this.courses.find(
      (course) => course.id === Number(this.courseId)
    );
  }

  courses: Course[] = [
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
