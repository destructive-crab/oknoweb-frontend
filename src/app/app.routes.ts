import type { Routes } from '@angular/router';
import { Home } from './home/home';
import { Submissions, submissionsListResolver } from './submissions/submissions'
import { Submit } from './submit/submit';
import { SubmitSuccess } from './submit-success/submit-success';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: Home },
  {
    path: 'submit',
    component: Submit,
  },
  {
    path: 'submissions',
    component: Submissions,
    resolve: {
      submissions: submissionsListResolver
    },
  },
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
