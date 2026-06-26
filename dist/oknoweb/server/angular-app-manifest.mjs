
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
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 10471, hash: 'fc95f1c2ef3f0d313b92296ce1551dbf8953adeff2485c7c8ab407e042f6600b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 945, hash: '17ddf10c2f60c84751ab7a572eb28aa69ade2e731cdb4c3056b224d88ecb2d44', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 24970, hash: '7f92eb0541ce9f23df10e4a87f9a0895b5d3cd5c5c6c49751935ef340c28cbb9', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'submit/index.html': {size: 17123, hash: '2a5b329dce74247a57a42a96a154613b5e229739bebd737f46575e0d92f0c530', text: () => import('./assets-chunks/submit_index_html.mjs').then(m => m.default)},
    'submissions/index.html': {size: 22136, hash: 'bcd8acdf941f2cea7396f46d1318996f553727dc29126807c7aaab765f3a4949', text: () => import('./assets-chunks/submissions_index_html.mjs').then(m => m.default)},
    'styles-3XUUC4N2.css': {size: 44449, hash: 'oMXJCu/4MTw', text: () => import('./assets-chunks/styles-3XUUC4N2_css.mjs').then(m => m.default)}
  },
};
