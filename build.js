var path = require("path");
var Builder = require('systemjs-builder');

var builder = new Builder();

builder.loadConfig('./config.js')

.then(function() {
	builder.config({
		baseURL: '.'
	});
	return builder.buildSFX('lib/main.js', 'dist/main.js');
})

.then(function() {
  console.log('Build complete');
})
.catch(function(err) {
  console.log('Build error');
  console.log(err);
});