
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
    'index.csr.html': {size: 11366, hash: 'db504e1ee3f959db7f6e02d5625103d046459c88611db23d6bc5d725bae14c5a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 945, hash: 'b4ef68b2b1d9a97a415b87be51dac99507004d3aec9d80ce1a68490aeabb2673', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-B3DH6AEL.css': {size: 51339, hash: '452q33KTq/Y', text: () => import('./assets-chunks/styles-B3DH6AEL_css.mjs').then(m => m.default)}
  },
};
