
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
    'index.csr.html': {size: 10771, hash: '068ba4abf4a0f0b22b37562a8b7943b7ca4c232cb3365ce28af7d0dee970336d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 996, hash: 'c7e6d3dcbfcb0416fc3e1240cba5f5fce9e7ea00bdf3e827136f86a3cc475c7c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-O2L3GKWC.css': {size: 47654, hash: 'BkWQRH69IBQ', text: () => import('./assets-chunks/styles-O2L3GKWC_css.mjs').then(m => m.default)}
  },
};
