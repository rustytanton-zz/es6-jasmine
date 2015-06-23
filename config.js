System.config({
  defaultJSExtensions: true,
  baseURL: '/',
  map: {
  	'jquery' : 'bower_components/jquery/dist/jquery.js',
    'babel' : 'node_modules/babel-core/browser.min.js',
    'plugin' : 'lib/plugin'
  },
  transpiler: 'babel'
});