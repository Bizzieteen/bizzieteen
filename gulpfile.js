var gulp = require('gulp');
var mocha = require('gulp-mocha');
let webpack = require('webpack');
var webserver = require('gulp-webserver');
let WebpackDevServer = require('webpack-dev-server');
let wpConf = require('./webpack.config.js');
var gutil = require('gulp-util');

gulp.task('test', function() {
    gulp.src('./tests/**/*.js').pipe(mocha()).on('error', function(err) {
        console.log('Error:' + err);
        this.emit('end');
    });
});

gulp.task('watch', function() {
    gulp.watch('./**/*.+(js|html)', ['test']);
    gulp.watch('./tests/**/*.js', ['test']);
});

gulp.task('webserver', function() {
    gulp.src('.')
        .pipe(webserver({
            port: 8080,
            livereload: true,
            directoryListing: false,
            open: 'http://localhost:8080/'
        }));
});

gulp.task('serve', function(callback) {
    // Start a webpack-dev-server
    var compiler = webpack(wpConf);

    new WebpackDevServer(compiler, {
        // server and middleware options
    }).listen(8080, 'localhost', function(err) {
        if (err) throw new gutil.PluginError('webpack-dev-server', err);
        // Server listening
        gutil.log('[webpack-dev-server]', 'http://localhost:8080/webpack-dev-server/index.html');

        // keep the server alive or continue?
        // callback()
    });
});

gulp.task('default', ['watch', 'webserver', 'test']);