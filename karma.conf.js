module.exports = function(config) {
	config.set({
		autoWatch: true,
		baseURL: '/',
		browsers: ['PhantomJS'],
		captureConsole: true,
		files: [],
		frameworks: ['systemjs','jasmine'],
		plugins: [
			require('karma-jasmine'),
			require('karma-phantomjs-launcher'),
			require('karma-systemjs')
		],
		systemjs: {
			configFile: './config.js',
			config: {
				transpiler: 'babel'
			},
			files: [
				'./bower_components/jquery/dist/jquery.js',
				'!lib/main.js',
				'lib/**.js',
				'spec/**.js'
			]
		}
	});
};