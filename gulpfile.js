/*
*  Altair Admin (AngularJS)
*  Automated tasks ( http://gulpjs.com/ )
*/

var gulp = require('gulp'),
    plugins = require("gulp-load-plugins")({
        // config: 'package.json',
        scope: ['devDependencies'],
        pattern: ['gulp-*', 'gulp.*', 'run-sequence'],
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
    "app/frontend/assets/template/js/modernizr.js",
    // jquery
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
    "app/frontend/assets/template/js/jquery.scrollbarWidth.js",
    // jquery.debouncedresize
    "app/frontend/assets/template/js/jquery.debouncedresize.js",
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
    .pipe(gulp.dest('public/built/template/js/'))
    .pipe(plugins.uglify({
      mangle: true
    }))
    .pipe(plugins.rename('common.min.js'))
    .pipe(plugins.size({
      showFiles: true
    }))
    .pipe(gulp.dest('public/built/template/js/'));
});

// custom uikit
gulp.task('uikit_js', function () {
  return gulp.src([
    // // uikit core
    "node_modules/uikit/dist/js/uikit.js",
    // // uikit components
    "node_modules/uikit/dist/js/components/accordion.js",
    "node_modules/uikit/dist/js/components/autocomplete.js",
    "app/frontend/assets/template/js/uikit_datepicker.js",
    "node_modules/uikit/dist/js/components/form-password.js",
    "node_modules/uikit/dist/js/components/form-select.js",
    "node_modules/uikit/dist/js/components/grid.js",
    "node_modules/uikit/dist/js/components/lightbox.js",
    "node_modules/uikit/dist/js/components/nestable.js",
    "node_modules/uikit/dist/js/components/notify.js",
    "node_modules/uikit/dist/js/components/slideshow.js",
    "node_modules/uikit/dist/js/components/sortable.js",
    "node_modules/uikit/dist/js/components/sticky.js",
    "node_modules/uikit/dist/js/components/tooltip.js",
    "app/frontend/assets/template/js/uikit_timepicker.js",
    "node_modules/uikit/dist/js/components/upload.js",
    "app/frontend/assets/template/js/uikit_beforeready.js"
  ])
    .pipe(plugins.concat('uikit_custom.js'))
    .pipe(gulp.dest('public/built/template/js/'))
    .pipe(plugins.uglify({
        mangle: true
    }))
    .pipe(plugins.rename('uikit_custom.min.js'))
    .pipe(plugins.size({
        showFiles: true
    }))
    .pipe(gulp.dest('public/built/template/js/'));
});

// angular common
gulp.task('angular_common', function () {
  return gulp.src([
    "node_modules/angular/angular.js",
    "node_modules/angular-sanitize/angular-sanitize.js",
    "node_modules/angular-animate/angular-animate.js",
    "node_modules/angular-ui-router/release/angular-ui-router.js",
    "node_modules/oclazyload/dist/ocLazyLoad.js",
    "app/frontend/assets/template/js/angular-retina.js",
    "node_modules/angular-breadcrumb/dist/angular-breadcrumb.js"
  ])
    .pipe(plugins.concat('angular_common.js'))
    .pipe(gulp.dest('public/built/template/js/'))
    .pipe(plugins.uglify({
        mangle: true
    }))
    .pipe(plugins.rename('angular_common.min.js'))
    .pipe(plugins.size({
        showFiles: true
    }))
    .pipe(gulp.dest('public/built/template/js/'));
});


gulp.task('build', function(callback) {
    return plugins.runSequence(
        ['common_js', 'uikit_js', 'angular_common'],
        callback
    );
});


