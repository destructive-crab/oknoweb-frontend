
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
      "chunk-26ZEPKRU.js"
    ],
    "route": "/admin/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JOVBVIBW.js"
    ],
    "route": "/admin/submit"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 11525, hash: '1c76142ef3c8c91ebce65f82eeae4a5d647b096d9f6b74de869150a740db936c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 996, hash: 'b5f1469e5e65204c3ba2812c7e9867d007028359fd54f8be3b7fcc777929d648', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'submit/index.html': {size: 18215, hash: 'a6b713294ca7191271628fcf450c023f477c733e4ffd93efd8aab5a6c2a0ca2f', text: () => import('./assets-chunks/submit_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 26061, hash: 'c126b5642711f731c8131a96030e2bc68094140ec8ec3139e4948631fac629cd', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'admin/login/index.html': {size: 17717, hash: 'd592075a6c63f99420b751e7fbed1ea484193a878825faa6cd513eee3410757d', text: () => import('./assets-chunks/admin_login_index_html.mjs').then(m => m.default)},
    'admin/submit/index.html': {size: 18166, hash: 'ee3990359c8d60192a4e41b48f006203c574ab16a23c6b8c7fba64a5189ea148', text: () => import('./assets-chunks/admin_submit_index_html.mjs').then(m => m.default)},
    'submissions/index.html': {size: 53631, hash: '8223977e89d59954176de196e8d6d7038a0a937564c1850426908e9cdd7e2970', text: () => import('./assets-chunks/submissions_index_html.mjs').then(m => m.default)},
    'styles-NKWVXDCS.css': {size: 49057, hash: 'ZuKSXoo768M', text: () => import('./assets-chunks/styles-NKWVXDCS_css.mjs').then(m => m.default)}
  },
};
