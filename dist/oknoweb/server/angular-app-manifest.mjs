
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
      "chunk-AG6LSDCE.js"
    ],
    "route": "/admin/submit"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 11549, hash: '052fade67ace8208eada0db001f86f6ba97c4b873ed123492f91d0f17254843c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 996, hash: 'e537decf219f6413d3727dfc11b5513b1b20ff6101dab61db87c1520f7e3a231', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'submit/index.html': {size: 18240, hash: 'dc04570404ea77deb7474942079c6ae0a8820ea064349afa95050d1ae555ea4f', text: () => import('./assets-chunks/submit_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 29273, hash: '5b287309766f5e318e46d57b9cdaf1afb3d583f499f27388aee90d7d7f205d7a', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'admin/submit/index.html': {size: 18251, hash: '712c0b2ba3e2ab804dbe695043543fb5f086089c1b6dacbeed2689a2a78bd845', text: () => import('./assets-chunks/admin_submit_index_html.mjs').then(m => m.default)},
    'admin/login/index.html': {size: 17931, hash: '20817da38a548814d47f5dcd6c785aa45e4c0688b55f8f65a530086e7f02bbb6', text: () => import('./assets-chunks/admin_login_index_html.mjs').then(m => m.default)},
    'submissions/index.html': {size: 59143, hash: 'b655249873156785c1ee74af02fea3f8c0e568b6277d68a3c739ae4b0f521132', text: () => import('./assets-chunks/submissions_index_html.mjs').then(m => m.default)},
    'styles-4SUHADTH.css': {size: 50399, hash: 'Tf1SMmKx7pA', text: () => import('./assets-chunks/styles-4SUHADTH_css.mjs').then(m => m.default)}
  },
};
