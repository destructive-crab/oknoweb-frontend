
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
    'index.csr.html': {size: 11687, hash: '93a710da499807798b388eea2fb7dfe8b0dca263fc49488076a68bc3c077477e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 945, hash: 'ade709c18bb5198e5f687ec3740a3cf7866ba6dd5f1ce6793fe0b0dad06d1388', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-TCYIWVWR.css': {size: 52494, hash: '8V709I7YRyw', text: () => import('./assets-chunks/styles-TCYIWVWR_css.mjs').then(m => m.default)}
  },
};
