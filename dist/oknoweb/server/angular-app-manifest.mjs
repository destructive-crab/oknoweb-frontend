
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
      "chunk-RA72TXKH.js"
    ],
    "route": "/admin/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VHJXAPMN.js"
    ],
    "route": "/admin/submit"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 11549, hash: '6028cc48a6010c507835686c95f7b11704f74c364b09c36a7c1a692cc86ceea0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 996, hash: '51a1a8817aec4574dd081e7fbccd2177b872e7dc18dfbc520aa6c044ce7b361f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 29199, hash: 'a2e5a547890729b128a64403bb95236f5bba8505f904b3db7149d1ca9a35a436', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'admin/login/index.html': {size: 17931, hash: '41cd0be43fbaec2435279e939a8a8816730047346f464d6337dd3fbe229f273f', text: () => import('./assets-chunks/admin_login_index_html.mjs').then(m => m.default)},
    'submit/index.html': {size: 18240, hash: '6414c248481ea999d191b5ae8f3dade6f595230fcba505ba33fb8ab7537acd71', text: () => import('./assets-chunks/submit_index_html.mjs').then(m => m.default)},
    'admin/submit/index.html': {size: 18253, hash: 'a773baf201d4e62b5b9d50d665c5975fb0952d02d268d2a65049ba7e96443170', text: () => import('./assets-chunks/admin_submit_index_html.mjs').then(m => m.default)},
    'submissions/index.html': {size: 58555, hash: '78b1b3a87fa1c622a9917299168d5361daca65572420027689bc472abcea7524', text: () => import('./assets-chunks/submissions_index_html.mjs').then(m => m.default)},
    'styles-OVEJ3BZK.css': {size: 50487, hash: 'Kbna3dHLXKk', text: () => import('./assets-chunks/styles-OVEJ3BZK_css.mjs').then(m => m.default)}
  },
};
