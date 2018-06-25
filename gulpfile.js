var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var mainNodeFiles = require('gulp-main-node-files');





gulp.task('sass', function() {
    return gulp.src('./assets/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./assets/css'))
        .pipe(browserSync.stream());
});


gulp.task('scripts', function() {
    gulp.src(mainNodeFiles({
        overrides: {
            'codemirror': [
                'particlesjs/dist/particles.min.js',
            ]
        }
    })).pipe(gulp.dest('./assets/js'));
})


gulp.task('serve', ['sass', 'scripts'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('./assets/scss/*.scss', ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});



