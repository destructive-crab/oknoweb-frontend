import { RenderMode, type ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'submissions',
    renderMode: RenderMode.Server,
  },
  {
    path: 'submissions/:id',
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
