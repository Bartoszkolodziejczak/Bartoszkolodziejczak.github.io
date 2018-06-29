var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var mainNodeFiles = require('gulp-main-node-files');
var stylus = require('gulp-stylus');


gulp.task('style-css', function () {
    return gulp.src('./node_modules/aos/dist/aos.css')
        .pipe(stylus())
        .pipe(gulp.dest('./assets/css'));
});


gulp.task('sass', function () {
    return gulp.src('./assets/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded',
            includePaths: ['node_modules/aos/dist/aos.css']
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./assets/css'))
        .pipe(browserSync.stream());
});


gulp.task('scripts', function () {
    gulp.src(mainNodeFiles({
        overrides: {
            'codemirror': [
                'particles.js/particles.js',
                'aos/dist/aos.js',
                'parallax-js/dist/parallax.js'
            ]
        }
    })).pipe(gulp.dest('./assets/js'));
})


gulp.task('serve', ['sass', 'scripts', 'style-css'], function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('./assets/scss/*.scss', ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});



