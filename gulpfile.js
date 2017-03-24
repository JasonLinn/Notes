var gulp = require('gulp');
var webserver = require('gulp-webserver');
var compass   = require('gulp-compass');

gulp.task('webserver', function() {
  gulp.src('./src/')
    .pipe(webserver({
      port:1234,
      livereload: true,
      directoryListing: false,
      open: true,
      fallback: 'gulp.html'
    }));
});

gulp.task('compass',function(){
    return gulp.src('./style/scss/*.scss')
        .pipe(compass({
            sourcemap: true,
            time: true,
      css: './style/css/',
      sass: './style/scss/',
      style: 'compact' //nested, expanded, compact, compressed
        }))
        .pipe(gulp.dest('./style/css/'));
}); 
gulp.task('watch',function(){
    gulp.watch('./style//scss/*.scss',['compass']);
});

gulp.task('default',['compass','watch','webserver']);
// gulp.task('default',['webserver']);

