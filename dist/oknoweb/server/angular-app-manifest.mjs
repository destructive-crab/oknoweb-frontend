
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
      "chunk-VBDGZEYM.js"
    ],
    "route": "/admin/submit"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 11549, hash: '5cfadd60ed35d837a25c68c7c8aa68b6b776de62aebf9f2cd9a18dd09682b041', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 996, hash: 'e1c5061b63ea4c6c8e40846bacfcc66d37c58cdcd916e0a99a847d00cc2b1d76', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 29273, hash: '72932097fd45d1a1c0cba5b6ddf9abe688499824ef16734d99b955adf11f53f3', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'admin/login/index.html': {size: 17931, hash: '01e75960106de56278ba18fb48fe6a19e2002d45c3389845d73a66b7dbf94839', text: () => import('./assets-chunks/admin_login_index_html.mjs').then(m => m.default)},
    'submit/index.html': {size: 18240, hash: 'cd0abab5e083863c16f279e9d2378d64096fc2e2ec618e5058d5a9cc10853bff', text: () => import('./assets-chunks/submit_index_html.mjs').then(m => m.default)},
    'admin/submit/index.html': {size: 18253, hash: 'b2418d62fed0b629a0021473c2735ed035ce9a0e8603d49852b7c6cceb0a22fc', text: () => import('./assets-chunks/admin_submit_index_html.mjs').then(m => m.default)},
    'submissions/index.html': {size: 59169, hash: 'd81c43683f2ab3275e799db278db5b0c8389b5a77149ad71b325977d1d975c5a', text: () => import('./assets-chunks/submissions_index_html.mjs').then(m => m.default)},
    'styles-4SUHADTH.css': {size: 50399, hash: 'Tf1SMmKx7pA', text: () => import('./assets-chunks/styles-4SUHADTH_css.mjs').then(m => m.default)}
  },
};
