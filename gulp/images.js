/**
 * Created by Rayr Lee on 2016/6/2.
 */

var gulp = require('gulp');
var $ = require('gulp-load-plugins')(),
    config = require('./config');

//图片部分任务
gulp.task('imageMin', function () {
    return gulp.src(config.PATH.IMG)
        .pipe($.imagemin({progressive: true}))
        .pipe(gulp.dest(config.PATH.build + '/images'));
});