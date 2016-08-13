/**
 * Created by Rayr Lee on 2016/6/2.
 */

var gulp = require('gulp'),
    config = require('./config'),
    runSequence = require('run-sequence');
//监听文件变化
gulp.task('watch', function () {
    gulp.watch(config.PATH.index, ['usemin']);
    gulp.watch(config.PATH.CSS, ['usemin']);
});