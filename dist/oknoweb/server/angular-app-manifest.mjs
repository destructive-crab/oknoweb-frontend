
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
    'index.csr.html': {size: 11549, hash: '36d9d3f6c31d18e72fb89803328415684ba9620824107b40fe6f8bb8de0b77d1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 996, hash: '536bfc559a8f500c9e117952423c00c517c98007eb7b7857910005ad75443bb2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 29273, hash: '139ec9eb3e3967a04b73e31e3946a234e535282ac97ba2be28c7a64c77f47cd6', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'submit/index.html': {size: 18240, hash: '115ed2d26ec3867050a85b3778b89336842bab31b3f5c2d7da345dcfd1e8b416', text: () => import('./assets-chunks/submit_index_html.mjs').then(m => m.default)},
    'admin/login/index.html': {size: 17931, hash: '8d48bf09faba1c8310816607559a7091cbb63e15b0fc12e375d8db98498b061d', text: () => import('./assets-chunks/admin_login_index_html.mjs').then(m => m.default)},
    'admin/submit/index.html': {size: 18253, hash: '59f566f510c792a96859adee583f4a37f8a5d1a22c79d1b021bebb8e0b665add', text: () => import('./assets-chunks/admin_submit_index_html.mjs').then(m => m.default)},
    'submissions/index.html': {size: 58961, hash: '9adc8384e5448f5ffc563d70e38806b71e7aa6276eb2d6a2c9d1e4e08d567082', text: () => import('./assets-chunks/submissions_index_html.mjs').then(m => m.default)},
    'styles-4SUHADTH.css': {size: 50399, hash: 'Tf1SMmKx7pA', text: () => import('./assets-chunks/styles-4SUHADTH_css.mjs').then(m => m.default)}
  },
};
