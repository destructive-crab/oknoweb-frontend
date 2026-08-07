
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
    'index.csr.html': {size: 11227, hash: 'fb1e28bbc5748dcbce8862dac9b1f87e670d6b20e3e65ce26ca5ce47aecdf0f4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 996, hash: '37ce093f4b98142b22a384e77be13ec595d6f249739a1dc7a2359ab3e3fe8d0a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-SOGBFBGL.css': {size: 49719, hash: '2dFu3oCRt4I', text: () => import('./assets-chunks/styles-SOGBFBGL_css.mjs').then(m => m.default)}
  },
};
