module.exports = function (grunt) {
    'use strict';
    var initConfig;
    require('load-grunt-tasks')(grunt);
    initConfig = {
        bower: 'bower_components',
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            test: {
                tasks: ['jshint', 'karma:unit:run']
            }
        },
        karma: {
            options: {
                configFile: 'test/karma.conf.js',
                browsers: ['Chrome']
            },
            unit: {
                singleRun: true
            },
            watch: {
                autoWatch: true
            },
            server: {
                background: true
            }
        },
        changelog: {
            options: {
                dest: 'CHANGELOG.md'
            }
        }

    };

    grunt.registerTask('default', ['karma:unit']);
    grunt.registerTask('watch', ['karma:watch']);

    grunt.initConfig(initConfig);
};