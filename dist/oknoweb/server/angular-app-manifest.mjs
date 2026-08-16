
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
    'index.csr.html': {size: 11366, hash: '5bdf31469b670650b465408ac7e1604bd868c9c8cf7962bfa18fe254620c7ffd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 945, hash: '7bbb85c32dd019e4f59ca9ac4858645b9cdd38b44f564377362727b1377ea05e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-B3DH6AEL.css': {size: 51339, hash: '452q33KTq/Y', text: () => import('./assets-chunks/styles-B3DH6AEL_css.mjs').then(m => m.default)}
  },
};
