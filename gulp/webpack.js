/**
 * Created by Rayr Lee on 2016/6/2.
 */

var gulp = require('gulp'),
    webpack = require('webpack'),
    $ = require('gulp-load-plugins')(),
    config = require('./config');

gulp.task('webpack', function () {
    if(gulp.env.dev){
        return gulp.src(config.PATH.appEnter)
            .pipe($.webpack(require('./webpack.config.dev.js'), webpack))
            .pipe(gulp.dest(config.PATH.appOut));
    }else{
        return gulp.src(config.PATH.appEnter)
            .pipe($.webpack(require('./webpack.config.js'), webpack))
            .pipe(gulp.dest(config.PATH.appOut));
    }

});

