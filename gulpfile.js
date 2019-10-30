/* gulpfile.js */
const { watch } = require('gulp');

var gulp            = require('gulp'),
    concat          = require('gulp-concat'),
    sass            = require('gulp-sass'),
    autoprefixer    = require('gulp-autoprefixer'),
    sourcemaps      = require('gulp-sourcemaps'),
    uglify          = require('gulp-uglify'),
    babel           = require('gulp-babel');

// ordered array of javascript source files
var sourceJS = [
    'src/js/set_attributes.js',
    'src/js/currency.js',
    'src/js/cash_counter.js',
    'src/js/app.js'
];

// process stylesheets
function styles(cb) {
    gulp.src('src/css/**/*.scss')
        .pipe(concat('quote-app.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browserlist: ['last 2 versions']  // config object
        }))
        .pipe(gulp.dest('dist/css'));
        
        cb();
}

// process scripts
function scripts(cb) {
    gulp.src(sourceJS)
        .pipe(sourcemaps.init())
        .pipe(concat('quote-app.min.js'))
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));

        cb();
}

// process scripts with source map
function scriptsWithSourcemap(cb) {
    gulp.src(sourceJS)
        .pipe(sourcemaps.init())
        .pipe(concat('quote-app.min.js'))
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/js'));
        
        cb();
}

// default task contains watcher
function defaultTask(cb) {
    watch('src/css/**/*.scss', styles);
    cb();
}

exports.scripts = scripts;
exports.default = defaultTask;