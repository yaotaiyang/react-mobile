/**
 * Created by Rayr Lee on 2016/6/2.
 */

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    config = require('./config');

//JS检测任务
gulp.task('jshint', function () {
    return gulp.src(config.PATH.JS)
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'));
});
