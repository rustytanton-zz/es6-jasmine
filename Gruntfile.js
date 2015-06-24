module.exports = function(grunt) {

    'use strict';

    require('./util/bsp-grunt')(grunt, {
        systemjs: {
            dist: {
                options: {
                    configFile: 'config.js',
                    configOverrides: {
                        baseURL: '.'
                    }
                },
                files: [
                    { 'dist/main.js': 'lib/main.js' }
                ]
            }
        },
        es6templates: {
            dist: {
                files: [
                    {
                        cwd: 'templates',
                        expand: true,
                        ext: '.html',
                        dest: 'dist/templates/',
                        src: '**/*.js'
                    }
                ]
            }
        }
    });

};
