
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
      "chunk-3C7OHGJ3.js"
    ],
    "route": "/admin/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7372G7K4.js"
    ],
    "route": "/admin/submit"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 11549, hash: '32d5cfa4332f998a9d31f1e4ff5dd8649ede0943ca79785b418833d419cbe0f6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 996, hash: 'b24f8b191c1b645340ac06f84b063b3914e35b5c46259fb5cda96fa11e99901a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 29273, hash: 'a0317cf920442425cd49ac407e78ab93c73fc0515804bb55b433619a15191a53', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'submit/index.html': {size: 18240, hash: '5ad43251e13b41dc4dcb18025d07c19c203e7025623ac964c9c02e7cbb9d6466', text: () => import('./assets-chunks/submit_index_html.mjs').then(m => m.default)},
    'admin/login/index.html': {size: 17931, hash: '62cd64667f00d39a3deeb81285b0deecd4b1bb555071ad6a8aa1d31f1f7a87ab', text: () => import('./assets-chunks/admin_login_index_html.mjs').then(m => m.default)},
    'admin/submit/index.html': {size: 18233, hash: '796eb35abcb540d624d33c18fbbd3ac062b39fd74fd4154f63afe5798b54abef', text: () => import('./assets-chunks/admin_submit_index_html.mjs').then(m => m.default)},
    'submissions/index.html': {size: 58961, hash: '11f3282c6f02047051d20f5203f1f1f255d92a6ae3652922d9f5c8d524359862', text: () => import('./assets-chunks/submissions_index_html.mjs').then(m => m.default)},
    'styles-4SUHADTH.css': {size: 50399, hash: 'Tf1SMmKx7pA', text: () => import('./assets-chunks/styles-4SUHADTH_css.mjs').then(m => m.default)}
  },
};
