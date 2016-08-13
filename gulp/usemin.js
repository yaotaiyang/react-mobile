/**
 * Created by Rayr Lee on 2016/6/2.
 */

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    rev = require("gulp-append-rev"),
    config = require('./config');
gulp.task('usemin', function() {
    gulp.src(config.PATH.CSS)
        .pipe($.usemin())
        .pipe(rev({root:"build"}))
        .pipe(gulp.dest('build/css'));
    gulp.src(config.PATH.index)
        .pipe($.usemin())
        .pipe(rev({root:"build"}))
        .pipe(gulp.dest('build/'));

    return;
});