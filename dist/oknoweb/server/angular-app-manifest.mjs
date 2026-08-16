
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
    'index.csr.html': {size: 11366, hash: 'c34efaa36b11d59c2f8becd1e96038397773499de0df5dc3196c08306a8f6454', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 945, hash: '77dad40459e18979f1733a52e8dbc2e0421b0936015067c00b7f0ff6272ec067', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-B3DH6AEL.css': {size: 51339, hash: '452q33KTq/Y', text: () => import('./assets-chunks/styles-B3DH6AEL_css.mjs').then(m => m.default)}
  },
};
