var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

sass.compiler = require('node-sass');



gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./public"
        }
    });
});

gulp.task('sass', function () {
    return gulp.src('./styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./styles/*.scss', gulp.series('sass'));
    gulp.watch('./styles/*.scss').on('change', browserSync.reload);
    gulp.watch('./app/*.html').on('change', browserSync.reload);
});

gulp.task('default', gulp.parallel('sass', 'browser-sync', 'sass:watch'));
