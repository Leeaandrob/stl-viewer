'use strict';

var gulp  = require('gulp'),
    browserify = require('browserify'),
    browserSync = require('browser-sync').create();

gulp.task('serve', [], function() {

    browserSync.init({
        server: './dist'

    });

    gulp.watch('./*.html', ["html"]);
    gulp.watch('./*.js', ["scripts"]);

});


gulp.task('html', function() {
    return gulp.src('./index.html')
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.stream());

});

gulp.task('scripts', function() {
    return gulp.src('./*.js')
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.stream());

});


gulp.task('default', ['serve', 'html', 'scripts']);
