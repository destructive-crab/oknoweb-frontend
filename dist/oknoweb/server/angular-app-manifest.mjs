
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
      "chunk-X6NB2MZB.js"
    ],
    "route": "/admin/submit"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 11525, hash: 'a5ab954e70425a05adb0d784e379b5c7a4e65061fe4c161382a47c0a89be30a7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 996, hash: '2c21e50b3a48b302aacf2488ae78e74d815f496f68b82e2c24d73fa912e2126f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'submit/index.html': {size: 18215, hash: '76bfb0329333ec11bf33cc6f9673ee6207d26bc3cb3a5e27452cf224428143bb', text: () => import('./assets-chunks/submit_index_html.mjs').then(m => m.default)},
    'admin/login/index.html': {size: 17810, hash: 'a7efbf6103c5255739860780f6a77460cb4949d1b629b3427a1451f4f7f148ab', text: () => import('./assets-chunks/admin_login_index_html.mjs').then(m => m.default)},
    'admin/submit/index.html': {size: 16300, hash: 'abd3a23b55b73f55321379933abc1f78cf629ac48c0cee1e606956e4ff23d287', text: () => import('./assets-chunks/admin_submit_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 26061, hash: '401b382f20ac2cbfe57696c056c82c79bcdce45212ce25338bb4e013c2b24a95', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'submissions/index.html': {size: 53648, hash: 'b149bdc5df34aa8f267dcbb95a89e2d525f6ed876959f4c7f73e8e6b5170b30f', text: () => import('./assets-chunks/submissions_index_html.mjs').then(m => m.default)},
    'styles-IWEX4CAW.css': {size: 49078, hash: 'cyjHTj2Rh9c', text: () => import('./assets-chunks/styles-IWEX4CAW_css.mjs').then(m => m.default)}
  },
};
