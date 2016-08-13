/**
 * Created by Rayr Lee on 2016/6/2.
 */

module.exports = {
    PATH: {
        'build': 'build',  //构建目录
        'JS': ['src/*.js', 'src/**/*.js', 'src/**/**/*.js', 'src/**/**/**/*.js'],
        'index': './src/index.html',
        'appEnter': './src/module/app.js',
        'appOut': 'build/js',
        'copyFile': ['src/static/fonts/*.*'],
        'IMG': ['src/static/images/*'],
        'CSS': ['src/static/css/*.css']
    }
}