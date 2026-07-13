
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
    'index.csr.html': {size: 11549, hash: '772db07d99047e8f43439f5a2055561301a66db9b5ec6536e5b289cebe42b041', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 996, hash: '4ac5370dceab53b4d4b6d82ecd59a4b84a9cf1b4adbf29e0886445d8fe7fd243', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 29273, hash: 'f6847dfdcb5db5dcf9d4b1cf778ecc2efe84844c9c0525902fc21a21d7ebe3d3', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'admin/login/index.html': {size: 17931, hash: '52ab279683b16bf8a37655b342243d9b04306863e55e39fc76fd5c06a40bda6f', text: () => import('./assets-chunks/admin_login_index_html.mjs').then(m => m.default)},
    'submit/index.html': {size: 18240, hash: '59469019533f75aab4873e35644fafec5b5ba4da023566bd96d77048ff086cf7', text: () => import('./assets-chunks/submit_index_html.mjs').then(m => m.default)},
    'admin/submit/index.html': {size: 18253, hash: 'af972af12490737ea6464daee6f6e1e3fd998f117eaf6bdcde51693a93200c04', text: () => import('./assets-chunks/admin_submit_index_html.mjs').then(m => m.default)},
    'submissions/index.html': {size: 58555, hash: '343bab6559d454de2492d9754204befe6d982380c169fb6f850c30fc72e307c5', text: () => import('./assets-chunks/submissions_index_html.mjs').then(m => m.default)},
    'styles-4SUHADTH.css': {size: 50399, hash: 'Tf1SMmKx7pA', text: () => import('./assets-chunks/styles-4SUHADTH_css.mjs').then(m => m.default)}
  },
};
