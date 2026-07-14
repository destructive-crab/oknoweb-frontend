
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/submit"
  },
  {
    "renderMode": 0,
    "route": "/submit/success/*"
  },
  {
    "renderMode": 2,
    "route": "/submissions"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XEFDFNIG.js"
    ],
    "route": "/admin/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MQCLIZN2.js"
    ],
    "route": "/admin/submit"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 10771, hash: '2f0d85273cbe6faefa4ee8214cee05908ddaa7aa455e84669a53798081d60a28', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 996, hash: '3d92f24ea4b1019eaf47c8ea9d6d8f3391f535840152193b1e01e6bdd4695c78', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'submit/index.html': {size: 17431, hash: '478a560a08c5fdb3d8230aaf2185fa3478bbf4d954cb420a67996a61e439048f', text: () => import('./assets-chunks/submit_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 28267, hash: '40c310f993c9838c897d233252986c533874287bead983c6d82135cdba5fa0f7', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'admin/login/index.html': {size: 17077, hash: 'affab2f82c40ed1868ac28d89fc5caf2bea7b8db5dc3949020bc13ee83dba56d', text: () => import('./assets-chunks/admin_login_index_html.mjs').then(m => m.default)},
    'admin/submit/index.html': {size: 17377, hash: 'b3102b73d55e43c227ec4ee33ca493c19afdce61d32743386350f347f213b963', text: () => import('./assets-chunks/admin_submit_index_html.mjs').then(m => m.default)},
    'submissions/index.html': {size: 21701, hash: 'da85a002a437d5dad36a844aefdaff9ad9bab5b7727aa9dbca251a9dd455f14d', text: () => import('./assets-chunks/submissions_index_html.mjs').then(m => m.default)},
    'styles-O2L3GKWC.css': {size: 47654, hash: 'BkWQRH69IBQ', text: () => import('./assets-chunks/styles-O2L3GKWC_css.mjs').then(m => m.default)}
  },
};
