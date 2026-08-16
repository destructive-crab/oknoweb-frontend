
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
    'index.csr.html': {size: 11366, hash: '686d9e2df13addacd470174886e0f350965eacd9511191de342aa77310b9720b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 945, hash: 'a8d64925fc85830e903babaddd664b47a460ec6d596cf2957f93664ba7cc0832', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-B3DH6AEL.css': {size: 51339, hash: '452q33KTq/Y', text: () => import('./assets-chunks/styles-B3DH6AEL_css.mjs').then(m => m.default)}
  },
};
