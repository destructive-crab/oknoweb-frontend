
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 1,
    "redirectTo": "/home",
    "route": "/"
  },
  {
    "renderMode": 1,
    "route": "/home"
  },
  {
    "renderMode": 1,
    "route": "/submit"
  },
  {
    "renderMode": 0,
    "route": "/submit/success/*"
  },
  {
    "renderMode": 0,
    "route": "/submissions"
  },
  {
    "renderMode": 1,
    "route": "/panel"
  },
  {
    "renderMode": 1,
    "route": "/panel/login"
  },
  {
    "renderMode": 1,
    "route": "/panel/submit"
  },
  {
    "renderMode": 1,
    "route": "/panel/submit/tags"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 11366, hash: '2529fb68bd66f655527f8f748469ae22ced4ae7ef8eef8867e0423ea08a67404', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 945, hash: '41cdef174deee6622da1d34c0592e786fbbab217518c078476ebd77c3b04ca17', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-B3DH6AEL.css': {size: 51339, hash: '452q33KTq/Y', text: () => import('./assets-chunks/styles-B3DH6AEL_css.mjs').then(m => m.default)}
  },
};
