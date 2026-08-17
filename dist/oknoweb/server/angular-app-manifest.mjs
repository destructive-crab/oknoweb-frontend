
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
    'index.csr.html': {size: 10910, hash: '1a0ab7a9073e66597170cec789ad3a115e22db32dc2f1e0b0b0497b73b72b71a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 945, hash: '97ce94905629641579d2faa72696b37e5dd70624f2498a40b81b78ab97487bf3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-EEFONMDC.css': {size: 48548, hash: 'QfW4wotrWEk', text: () => import('./assets-chunks/styles-EEFONMDC_css.mjs').then(m => m.default)}
  },
};
