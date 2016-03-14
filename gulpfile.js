/*
*  Altair Admin (AngularJS)
*  Automated tasks ( http://gulpjs.com/ )
*/

var gulp = require('gulp'),
    plugins = require("gulp-load-plugins")({
        // config: 'package.json',
        scope: ['devDependencies'],
        pattern: ['gulp-*', 'gulp.*'],
        replaceString: /\bgulp[\-.]/
    });

// browser sync
// var bs_angular = require('browser-sync').create('altair_angular');

// chalk error
var chalk = require('chalk');
var chalk_error = chalk.bold.red;

// // get altair version
// var pjson = require('./package.json');
// var version = pjson.version;

// 1. -------------------- MINIFY/CONCATENATE JS FILES --------------------

// commmon
gulp.task('common_js', function () {
  return gulp.src([
    "app/frontend/assets/javascripts/plugins/modernizr.js",
    "node_modules/jquery/dist/jquery.js",
    // moment
    "node_modules/moment/moment.js",
    // fastclick (touch devices)
    "node_modules/fastclick/lib/fastclick.js",
    // custom scrollbar
    "node_modules/jquery.scrollbar/jquery.scrollbar.js",
    // create easing functions from cubic-bezier co-ordinates
    "node_modules/jquery-bez/lib/jquery.bez.min.js",
    // Get the actual width/height of invisible DOM elements with jQuery
    "node_modules/jquery.actual/jquery.actual.js",
    // waypoints
    "node_modules/waypoints/lib/jquery.waypoints.js",
    // velocityjs (animation)
    "node_modules/velocity-animate/velocity.js",
    "node_modules/velocity-animate/velocity.ui.js",
    // advanced cross-browser ellipsis
    "node_modules/jquery.dotdotdot/src/js/jquery.dotdotdot.js",
    // hammerjs
    "node_modules/hammerjs/hammer.js",
    // scrollbar width
    "app/frontend/assets/javascripts/plugins/jquery.scrollbarWidth.js",
    // jquery.debouncedresize
    "app/frontend/assets/javascripts/plugins/jquery.debouncedresize.js",
    // screenfull
    "node_modules/screenfull/dist/screenfull.js",
    // waves
    "node_modules/node-waves/dist/waves.js"
  ])
    .pipe(plugins.concat('common.js'))
    .on('error', function(err) {
      console.log(chalk_error(err.message));
      this.emit('end');
    })
    .pipe(gulp.dest('public/built/js/'))
    .pipe(plugins.uglify({
      mangle: true
    }))
    .pipe(plugins.rename('common.min.js'))
    .pipe(plugins.size({
      showFiles: true
    }))
    .pipe(gulp.dest('assets/js/'));
});
