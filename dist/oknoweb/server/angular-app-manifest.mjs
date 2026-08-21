
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 1,
    "redirectTo": "/home",
    "route": "/"
  },
  {
    "renderMode": 1,
    "route": "/home"
  },
  {
    "renderMode": 1,
    "route": "/submit"
  },
  {
    "renderMode": 0,
    "route": "/submit/success/*"
  },
  {
    "renderMode": 0,
    "route": "/submissions"
  },
  {
    "renderMode": 0,
    "route": "/submissions/*"
  },
  {
    "renderMode": 1,
    "route": "/panel"
  },
  {
    "renderMode": 1,
    "route": "/panel/login"
  },
  {
    "renderMode": 1,
    "route": "/panel/submit"
  },
  {
    "renderMode": 1,
    "route": "/panel/submit/tags"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 11687, hash: 'ec7bfc6389912a17d9297482ea77cf73db1fa39332cd28cd3ba83bc25f1dafd2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 945, hash: '6a0fb48c93a54b9f7efc23f06f082514b7444b889953242301d5de0be8c3c6e4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-3KS2YMFR.css': {size: 52470, hash: 'GcsiUOi8l9w', text: () => import('./assets-chunks/styles-3KS2YMFR_css.mjs').then(m => m.default)}
  },
};
