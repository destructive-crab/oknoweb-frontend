
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
<<<<<<< HEAD
      "chunk-26ZEPKRU.js"
=======
      "chunk-CB67CLQK.js"
>>>>>>> f96ca53 (Build after submission list rework)
    ],
    "route": "/admin/login"
  },
  {
    "renderMode": 2,
    "preload": [
<<<<<<< HEAD
      "chunk-JOVBVIBW.js"
=======
      "chunk-Q2I4FGO7.js"
>>>>>>> f96ca53 (Build after submission list rework)
    ],
    "route": "/admin/submit"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
<<<<<<< HEAD
    'index.csr.html': {size: 11525, hash: '1c76142ef3c8c91ebce65f82eeae4a5d647b096d9f6b74de869150a740db936c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 996, hash: 'b5f1469e5e65204c3ba2812c7e9867d007028359fd54f8be3b7fcc777929d648', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'submit/index.html': {size: 18215, hash: 'a6b713294ca7191271628fcf450c023f477c733e4ffd93efd8aab5a6c2a0ca2f', text: () => import('./assets-chunks/submit_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 26061, hash: 'c126b5642711f731c8131a96030e2bc68094140ec8ec3139e4948631fac629cd', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'admin/login/index.html': {size: 17717, hash: 'd592075a6c63f99420b751e7fbed1ea484193a878825faa6cd513eee3410757d', text: () => import('./assets-chunks/admin_login_index_html.mjs').then(m => m.default)},
    'admin/submit/index.html': {size: 18166, hash: 'ee3990359c8d60192a4e41b48f006203c574ab16a23c6b8c7fba64a5189ea148', text: () => import('./assets-chunks/admin_submit_index_html.mjs').then(m => m.default)},
    'submissions/index.html': {size: 53631, hash: '8223977e89d59954176de196e8d6d7038a0a937564c1850426908e9cdd7e2970', text: () => import('./assets-chunks/submissions_index_html.mjs').then(m => m.default)},
    'styles-NKWVXDCS.css': {size: 49057, hash: 'ZuKSXoo768M', text: () => import('./assets-chunks/styles-NKWVXDCS_css.mjs').then(m => m.default)}
=======
    'index.csr.html': {size: 11549, hash: '6e950476ce036b32e049bf85fa06c09e5a66150c5ab2e84c39783fd5c6b91492', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 996, hash: '137ac107ccddbc934172c7967d9e413569984c866169d61eb87224e8f9137b36', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'submit/index.html': {size: 18240, hash: 'ff8b6812052c542b4a17a3963649610ae5fe12bba7dd90df258c775be8c30650', text: () => import('./assets-chunks/submit_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 26632, hash: '3d14e3dbc6aca167d26849c89780ad416a0c7cf75bdaeba309e4d133a8c42ca9', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'admin/submit/index.html': {size: 16343, hash: '0571e220702abd0d47b57f365eefcd604d17c74c3c1d1404c595fcc4ba9ddf9a', text: () => import('./assets-chunks/admin_submit_index_html.mjs').then(m => m.default)},
    'admin/login/index.html': {size: 18070, hash: '9da26c6ccb03f8add5f21213753fde5227922861c2783942e756bb0a641388b0', text: () => import('./assets-chunks/admin_login_index_html.mjs').then(m => m.default)},
    'submissions/index.html': {size: 58661, hash: '6ea5a7a9b47d146c275adc62fddec736bc1f9f9d62f9a3b29e079d6b5527673d', text: () => import('./assets-chunks/submissions_index_html.mjs').then(m => m.default)},
    'styles-JJ7AXYW3.css': {size: 49887, hash: 'g/JhG+uiX/M', text: () => import('./assets-chunks/styles-JJ7AXYW3_css.mjs').then(m => m.default)}
>>>>>>> f96ca53 (Build after submission list rework)
  },
};
