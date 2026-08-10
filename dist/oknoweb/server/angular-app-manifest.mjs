
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
      "chunk-EJAF55PD.js"
    ],
    "route": "/admin/login"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-Q26BY2G5.js"
    ],
    "route": "/admin/submit"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 11227, hash: '3db3b02cc4ef972b06aca92b88088b64179f485ab9afef0f9154ed1d93d3f9a7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 996, hash: 'a09242f3aadd99567a4abe8902949b13ce343637dc0b6e41b96287ce68bf41f4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-I7IB5IO4.css': {size: 49764, hash: 'wc7LJf9hKcU', text: () => import('./assets-chunks/styles-I7IB5IO4_css.mjs').then(m => m.default)}
  },
};
