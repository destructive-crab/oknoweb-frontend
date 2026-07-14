
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
    "renderMode": 1,
    "route": "/submissions"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-PMOS5LWB.js"
    ],
    "route": "/admin/login"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-D5MJDDJO.js"
    ],
    "route": "/admin/submit"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 11227, hash: '427025e8502db3d29c22d7c8d1ed17e6cc43656778199b5332ac517af6dc359d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 996, hash: '7f8e42acc8dac2a1fe6e80807fe2c0aece511bd4acb4bc54f5f50ac007243e7a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-WEESCCI5.css': {size: 49084, hash: '3YiQ06NBIBA', text: () => import('./assets-chunks/styles-WEESCCI5_css.mjs').then(m => m.default)}
  },
};
