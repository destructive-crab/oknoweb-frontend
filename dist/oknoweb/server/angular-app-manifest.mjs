
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
    "preload": [
      "chunk-EJAF55PD.js"
    ],
    "route": "/admin/login"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-Q26BY2G5.js"
    ],
    "route": "/admin/submit"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 11227, hash: '05737d89665d88571e0d01541b4e089ca0c4267e8e49ca0dcb5eece6fb99448e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 996, hash: '55ae5bb447c191a45246e09ad46be9e639e40fba4aa842e4fc382443d1125a9f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-IA6JVSN3.css': {size: 49963, hash: 'JENAgocv0Cg', text: () => import('./assets-chunks/styles-IA6JVSN3_css.mjs').then(m => m.default)}
  },
};
