import { Routes } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'about', component: AboutComponent },
];
