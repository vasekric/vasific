'use strict';
// ↓ ↓ ↓ ↓ DEPENDENCIES ↓ ↓ ↓ ↓
var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var LessPluginAutoPrefix = require('less-plugin-autoprefix');
var autoprefix = new LessPluginAutoPrefix({browsers: ["last 3 versions"]});
var connect = require('gulp-connect');
var babel = require('gulp-babel');
var buffer = require('vinyl-buffer');

var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

/* nicer browserify errors */
var gutil = require('gulp-util');
var chalk = require('chalk');


// ↓ ↓ ↓ ↓ CUSTOMIZABLE PROPERTIES ↓ ↓ ↓ ↓
var lessFiles = './src/css/**/*.less';
var cssOutput = './build/css/';
var htmlFiles = './src/html/*.html';
var htmlOutput = './build/';
var jsFiles = './src/**/*.js';
var jsInput = './src/App.js';
var jsOutput = './build/';
var imgFiles = './src/img/*.*';
var imgOutput = './build/img/';
var fontFiles = './src/fonts/*.*';
var fontOutput = './build/fonts/';

// ↓ ↓ ↓ ↓ DEFINED GULP TASKS ↓ ↓ ↓ ↓
gulp.task('less', compileLess);
gulp.task('watch-less', watchLess);
gulp.task('watch', watch);
gulp.task('server', server);
gulp.task('html', html);
gulp.task('js', js);
gulp.task('fonts', fonts);
gulp.task('imgs', imgs);
gulp.task('react-lib', reactLib);
gulp.task('build', build);

// ↓ ↓ ↓ ↓ FUNCTIONS USED BY GULP TASKS ↓ ↓ ↓ ↓
function build() {
    compileLess();
    imgs();
    html();
    js();
    fonts();
    reactLib();
}
function reactLib() {
    gulp.src('./libs/js/react.min.js')
        .pipe(gulp.dest('./build/js/'))
}
function fonts() {
    gulp.src(fontFiles)
        .pipe(gulp.dest(fontOutput))
        .pipe(connect.reload());
}
function compileLess() {
    return gulp.src(lessFiles)
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')],
            plugins: [autoprefix]
        }))
        .on("error", handleError)
        .pipe(concat('style.css'))
        .pipe(gulp.dest(cssOutput))
        .pipe(minifyCss({
            advanced: true
        }))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest(cssOutput))
        .pipe(connect.reload())
}
function watchLess() {
    compileLess();
    gulp.watch(lessFiles, ['less']);
}
function watch() {
    gulp.watch([htmlFiles], ['html']);
    gulp.watch([lessFiles], ['less']);
    gulp.watch([jsFiles], ['js']);
    gulp.watch([imgFiles], ['imgs']);
    gulp.watch([fontFiles], ['fonts']);
}
function imgs() {
    gulp.src(imgFiles)
        .pipe(gulp.dest(imgOutput))
        .pipe(connect.reload());
}
function html() {
    gulp.src(htmlFiles)
        .pipe(gulp.dest(htmlOutput))
        .pipe(connect.reload());
}
function js() {
    browserify({
        entries: jsInput,
        extensions: ['.js'],
        debug: true
    })
        .transform(babelify, {
            presets: ['es2015', 'react']
        })
        .on("error", handleError)
        .bundle()
        .on("error", handleError)
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(gulp.dest(jsOutput))
        .pipe(connect.reload());
}
function server() {
    connect.server({
        root: ['./'],
        port: 8001,
        livereload: true
    });
    js();
    gulp.watch([jsFiles], ['js']);
}
function handleError(err) {
    if (err.fileName) {
        // regular error
        gutil.log(chalk.red(err.name)
            + ': '
            + chalk.yellow(err.fileName.replace(__dirname + '/src/js/', ''))
            + ': '
            + 'Line '
            + chalk.magenta(err.lineNumber)
            + ' & '
            + 'Column '
            + chalk.magenta(err.columnNumber || err.column)
            + ': '
            + chalk.blue(err.description))
    } else {
        // browserify error..
        gutil.log(chalk.red(err.name)
            + ': '
            + chalk.yellow(err.message))
    }

    this.emit('end');
}