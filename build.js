var fs = require('fs');
var path = require('path');
var Builder = require('systemjs-builder');
var builder = new Builder();
var System = require('es6-module-loader').System;

/** main.js build */

builder.loadConfig('./config.js')

.then(function() {
	builder.config({
		baseURL: '.'
	});
	return builder.buildSFX('lib/main.js', 'dist/main.js');
})

.then(function() {
  console.log('main.js build complete');
})
.catch(function(err) {
  console.log('main.js build error');
  console.log(err);
});

/** compile example template for server usage */

System.import('./templates/plugin.js')
	.then(function(template) {
		fs.writeFile('./templates.server/plugin.html', template.default);
		console.log('compiled templates/plugin.js to templates.server/plugin.html');
	})
	.catch(function(err) {
		console.log('template build error');
  		console.log(err);
	});
