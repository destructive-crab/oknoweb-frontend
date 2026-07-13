
export default {
  basePath: '/',
  allowedHosts: [
  "oknoweb.ru",
  "localhost"
],
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
