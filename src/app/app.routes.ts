import { Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';
// import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'courses',
    component: CoursesComponent,
  },
  {
    path: 'courses/:id',
    component: CoursesDetailsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },

  {
    path: '**',
    component: NotfoundComponent,
  },
];
