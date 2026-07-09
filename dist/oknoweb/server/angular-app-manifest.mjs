
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
      "chunk-C5WOCZDP.js"
    ],
    "route": "/admin/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6U5TDE35.js"
    ],
    "route": "/admin/submit"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 11525, hash: 'da58be1d8857186c0af96c6e57c5ff3139af1ca0c97c1a407fe0891f32d6de42', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 996, hash: '477ad23bdd0b2df06f60e25be43324b7fed8b7913c70d902422ea4b6f022b0ed', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'submit/index.html': {size: 18215, hash: '7717adddc13c35574fa85a1d0ededbc85a924b7595cdb8a9a64c95f135a208a3', text: () => import('./assets-chunks/submit_index_html.mjs').then(m => m.default)},
    'admin/submit/index.html': {size: 16318, hash: 'ac5dda3276c8f3dccbbed412e25b8df5fa7db024fd21680db0e8aa02bc661627', text: () => import('./assets-chunks/admin_submit_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 26061, hash: 'e53857b37239de6efbba201752e381c1ce7e48f567b28553a0e74ee527427126', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'admin/login/index.html': {size: 17810, hash: '2ba912678f60a9f7010f176ff531cdd605c7793b606ce53f75d561b44b54466f', text: () => import('./assets-chunks/admin_login_index_html.mjs').then(m => m.default)},
    'submissions/index.html': {size: 54460, hash: '596a86afc296542cf5574b89b6bc701ca3b917d71b1628fbc17572f6e6ba87d9', text: () => import('./assets-chunks/submissions_index_html.mjs').then(m => m.default)},
    'styles-UBRZ63EA.css': {size: 49005, hash: '0tUkWhLcrSI', text: () => import('./assets-chunks/styles-UBRZ63EA_css.mjs').then(m => m.default)}
  },
};
