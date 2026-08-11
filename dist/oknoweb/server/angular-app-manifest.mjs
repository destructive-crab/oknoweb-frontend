
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
    "preload": [
      "chunk-T234Z7MF.js"
    ],
    "route": "/admin/login"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-LHOWSJCK.js"
    ],
    "route": "/admin/submit"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 11227, hash: 'cf8b0d717ba76a18d759175a3f738801571e4bab3763916087c953bdc6c108d5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 996, hash: '7fd07a610ac20c8af2bc4136d112af7188c7e3c25ac3ae90c28b2506963013dd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-GQDBA53F.css': {size: 49720, hash: 'ANYn72OaJBo', text: () => import('./assets-chunks/styles-GQDBA53F_css.mjs').then(m => m.default)}
  },
};
