var gulp = require('gulp');
var webserver = require('gulp-webserver');
var compass   = require('gulp-compass');
var bower = require('gulp-bower');

gulp.task('webserver', function() {
  gulp.src('./src/')
    .pipe(webserver({
      port:1234,
      livereload: true,
      directoryListing: false,
      open: true,
      fallback: '*.html'
    }));
});

gulp.task('compass',function(){
    return gulp.src('src/scss/*.scss')
        .pipe(compass({
            sourcemap: true,
            time: true,
      css: 'src/css/',
      sass: 'src/scss/',
      style: 'compact' //nested, expanded, compact, compressed
        }))
        .pipe(gulp.dest('src/css/'));
}); 
gulp.task('watch',function(){
    gulp.watch('src//scss/*.scss',['compass']);
});

gulp.task('bower', function() {
  return bower('./my_bower_components')
    .pipe(gulp.dest('libs/'))
});

gulp.task('default',['compass','watch','webserver']);
// gulp.task('default',['webserver']);

