/**
 * Created by Rayr Lee on 2016/6/2.
 */

var gulp = require('gulp'),
    config = require('./config');

//JS检测任务
gulp.task('copy', function () {
    return gulp.src(config.PATH.copyFile)
        .pipe(gulp.dest('./build/fonts'));
});