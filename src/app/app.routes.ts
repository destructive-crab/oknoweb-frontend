import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Submit } from './submit/submit';
import { Submissions } from './submissions/submissions';
import { SubmitSuccess } from './submit-success/submit-success';
import { RenderMode } from '@angular/ssr';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: Home },
  { path: 'submit', component: Submit },
  { path: 'submissions', component: Submissions },
  { path: 'submit/success/:id', component: SubmitSuccess, },
  {
    path: 'admin/login',
    loadComponent: () => import('./admin-login/admin-login').then(m => m.AdminLogin)
  },
  {
    path: 'admin/submit',
    loadComponent: () => import('./admin-submit/admin-submit').then(m => m.AdminSubmit)
  }
];
