
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
    'index.csr.html': {size: 11323, hash: '7fec7ccb06eacae3e35216a02a06ca72152ae86af29046c7ad57295657afd6d8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 945, hash: 'b0bb34d669643bda874875a78d6504f726417edb41832acfb1d22cd670029365', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-W4OKQHSV.css': {size: 51222, hash: 'rEDlJBIDhZU', text: () => import('./assets-chunks/styles-W4OKQHSV_css.mjs').then(m => m.default)}
  },
};
