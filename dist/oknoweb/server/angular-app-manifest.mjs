
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
    'index.csr.html': {size: 11687, hash: '77bb95c3c911af9d67e87465b4d522eecd564e3c5e2555080226bf52c2b17db9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 945, hash: 'b96f25b1c6b325f72aad68155d308b3328dfd4e891b419562da5820c3178c8dd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-TCYIWVWR.css': {size: 52494, hash: '8V709I7YRyw', text: () => import('./assets-chunks/styles-TCYIWVWR_css.mjs').then(m => m.default)}
  },
};
