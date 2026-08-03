import {Routes} from '@angular/router';
import { RenderMode, type ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'submissions',
    renderMode: RenderMode.Server,
  },
  {
    path: 'submit/success/:id',
    renderMode: RenderMode.Server,
  },
  {
    path: '**',
    renderMode: RenderMode.Client,
  },
];
