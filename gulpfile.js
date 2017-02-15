var gulp = require('gulp');
var mocha = require('gulp-mocha');
var webserver = require('gulp-webserver');

gulp.task('test', function() {

gulp.src('./tests/**/*.js').
    pipe(mocha()).
    on('error', function(err) {
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

gulp.task('default', ['watch', 'webserver', 'test']);
