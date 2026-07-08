
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
      "chunk-3HMF5HNB.js"
    ],
    "route": "/admin/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-FNFEXHP7.js"
    ],
    "route": "/admin/submit"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 11576, hash: '7b1cc1967667e0d67d87f861fbe8f35d5db486698056bacf8ce34a5665ccbbf9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1047, hash: 'e3cf0998ee81d776704021d8897151cf74a77e16e9b8f17888b8638115ac4581', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'submit/index.html': {size: 18266, hash: '28a3223d891176f85df18e9fa121d28f875724a2125ba02031b0353a5ca3e706', text: () => import('./assets-chunks/submit_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 26062, hash: '58e8902eb7c39b38a07c81676f30ab12eb0e02c65edcd81ca491a43a92708d20', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'admin/submit/index.html': {size: 16272, hash: '8e5e54b45895cfa02d16ebecd149078cb3d6d9821718f5a575dd5e19492290be', text: () => import('./assets-chunks/admin_submit_index_html.mjs').then(m => m.default)},
    'admin/login/index.html': {size: 17481, hash: '9cac982af1b9897cfd6ea5f1a9f88ed3837efb99508bbe33ae69f0988144eb7b', text: () => import('./assets-chunks/admin_login_index_html.mjs').then(m => m.default)},
    'submissions/index.html': {size: 54466, hash: '82fdcf28369f4563582c121ec0a8ff91c69b53a6f897c6a75e8089b00687e9e6', text: () => import('./assets-chunks/submissions_index_html.mjs').then(m => m.default)},
    'styles-NL5WMYYN.css': {size: 49170, hash: '7GchUuMZelA', text: () => import('./assets-chunks/styles-NL5WMYYN_css.mjs').then(m => m.default)}
  },
};
