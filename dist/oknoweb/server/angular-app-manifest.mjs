
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
    'index.csr.html': {size: 11227, hash: 'a0b690883218704f1a4ddf7b78d3047e8387bddd3991eb3e704159633eb61ba4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 996, hash: 'cd3f975a12d12837c5e33c5abdccf11e41f8216797114fef23ea46b0cd6b923d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'admin/login/index.html': {size: 17600, hash: 'd5cf8ac6d558dc2884157f7c5dbcf214a36387b797a12ef02810c155f2e03396', text: () => import('./assets-chunks/admin_login_index_html.mjs').then(m => m.default)},
    'submit/index.html': {size: 17909, hash: '93e53b85efb611211a8e30cde8e7a538566a9a9c82bda6cfa408ef12be89b1bd', text: () => import('./assets-chunks/submit_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 28942, hash: '3d26bd7f7c86ca3652939d79fa1e0b4d61fb61ca5a92c4e86046f8d7523b3080', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'admin/submit/index.html': {size: 17901, hash: '933ee7d4c49f16bcfc8f6ed25823a204140ec51aba0148ab096ac8b7d35fb193', text: () => import('./assets-chunks/admin_submit_index_html.mjs').then(m => m.default)},
    'submissions/index.html': {size: 58837, hash: 'af42b957eee144a684fe902888f69f0dcc02df8edbe0532936845cb47a4831e1', text: () => import('./assets-chunks/submissions_index_html.mjs').then(m => m.default)},
    'styles-UHIMA4NL.css': {size: 49281, hash: 'NgLd2xaIXdQ', text: () => import('./assets-chunks/styles-UHIMA4NL_css.mjs').then(m => m.default)}
  },
};
