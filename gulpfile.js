var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('copy', function() {
  gulp.src('./src/ready.js')
    .pipe(gulp.dest('./dist'));
});

gulp.task('minify', ['copy'], function() {
  gulp.src('./dist/ready.js')
    .pipe(rename('ready.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', function() {
  console.log('Hello from ready.js');
});
