
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
    'index.csr.html': {size: 11687, hash: 'e88c0563a8735d9ef3ef8eb6bfc257ca9bb01703cd8e80ff2a814aa124a5cdfb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 945, hash: '37d50f367cad5a40c0a173fe7c2705fcf9fd3ef0acb0d821691e4efa845f1a34', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-TCYIWVWR.css': {size: 52494, hash: '8V709I7YRyw', text: () => import('./assets-chunks/styles-TCYIWVWR_css.mjs').then(m => m.default)}
  },
};
