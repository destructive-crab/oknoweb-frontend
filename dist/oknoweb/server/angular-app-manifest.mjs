
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
    'index.csr.html': {size: 11687, hash: '94186fdeaf44ce579e226d83724974180bf4b0cdce912c0baa9194747b66ecf1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 945, hash: '928268653007620a04d6ecffbba1626c6d8e1b45728edf07802f5d923608b35c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-TCYIWVWR.css': {size: 52494, hash: '8V709I7YRyw', text: () => import('./assets-chunks/styles-TCYIWVWR_css.mjs').then(m => m.default)}
  },
};
