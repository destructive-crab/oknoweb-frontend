import type { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Submissions, submissionsListResolver } from './features/okno-submit/submissions/submissions'
import { Submit, tagsResolver } from './features/okno-submit/submit/submit';
import { SubmitSuccess } from './features/okno-submit/submit-success/submit-success';
import { SubmissionPage, submissionResolver } from './features/okno-submit/submission-page/submission-page';
import { PanelLogin } from './features/panel/panel-login/panel-login';
import { PanelRoot } from './features/panel/panel-root/panel-root';
import { PanelSubmit } from './features/panel/submit/panel-submit/panel-submit';
import { PanelSubmitTags } from './features/panel/submit/panel-submit-tags/panel-submit-tags';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: Home },
  {
    path: 'submit',
    component: Submit,
    resolve: {
      tags: tagsResolver
    },
  },
  {
    path: 'submissions',
    component: Submissions,
    resolve: {
      submissions: submissionsListResolver
    },
  },
  {
    path: 'submissions/:id',
    component: SubmissionPage,
    resolve: {
      submission: submissionResolver
    },
  },
  {
    path: 'submit/success/:id',
    component: SubmitSuccess,
  },
  {
    path: 'panel',
    component: PanelRoot,
  },
  {
    path: 'panel/login',
    component: PanelLogin,
  },
  {
    path: 'panel/submit',
    component: PanelSubmit,
  },
  {
    path: 'panel/submit/tags',
    component: PanelSubmitTags,
  },
];
