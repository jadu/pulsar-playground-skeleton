module.exports = function(grunt) {

    'use strict';

    grunt.initConfig({

        pkg:     grunt.file.readJSON('package.json'),

        sass: {
            dev: {
                options: {
                    implementation: 'sass',
                    outputStyle: 'nested',
                    sourceMap: true,
                    includePaths: [
                        'scss',
                        'vendor/jadu/pulsar/stylesheets'
                    ]
                },
                files: [{
                    cwd:    'scss/',
                    dest:   'css/',
                    expand: true,
                    ext:    '.css',
                    extDot: 'first',
                    src:    '*.scss'
                }]
            }
        },

        scsslint: {
            allFiles: [
                'scss/**/*.scss',
            ],
            options: {
                config: 'vendor/jadu/pulsar/.scss-lint.yml',
                colorizeOutput: true
            },
        },

        bless: {
            css: {
                options: {
                    cacheBuster: true,
                    compress: true,
                    logCount: true
                },
                files: {
                    'css/pulsar-ie8.min.css': 'css/pulsar-ie8.css',
                    'css/pulsar-ie9.min.css': 'css/pulsar-ie9.css'
                }
            }
        },

        browserSync: {
            files: [
                'css/*',
                'js/**/*',
                'views/**/*'
            ],
            options: {
                proxy: 'http://localhost:5000/app.php',
                reloadOnRestart: true,
                watchTask: true
            }
        },

        browserify: {
            dev: {
                files: {
                    'js/bundle.js': ['js/index.js']
                },
                options: {
                    browserifyOptions: {
                        standalone: 'pulsar',
                        debug: true
                    },
                    transform: [
                        ['babelify', { presets: ['es2015'] } ],
                        ['aliasify', { global: true }]
                    ]
                }
            }
        },

        autoprefixer: {
            dev: {
                options: {
                    browsers: ['last 2 version', 'ie 8', 'ie 9']
                },
                expand: true,
                src:    'css/*.css'
            }
        },

        watch: {
            css: {
                files: ['scss/**/*.scss'],
                tasks: ['sass:dev', 'autoprefixer', 'bless:css']
            },
            scsslint: {
                files: 'scss/**/*.scss',
                tasks: ['scsslint']
            },
            js: {
                files: ['js/**/*.js', 'package.json'],
                tasks: ['browserify:dev']
            }
        },

    });

    grunt.registerTask('default', [
        'sass',
        'autoprefixer',
        'bless',
        'browserify',
        'browserSync',
        'watch'
    ]);

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

};
