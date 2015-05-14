var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var webserver = require('gulp-webserver');
require('gulp-release-tasks')(gulp);

var jasmine_files = [
  './bower_components/jasmine-core/lib/jasmine-core/jasmine.css',
  './bower_components/jasmine-core/lib/jasmine-core/jasmine.js',
  './bower_components/jasmine-core/lib/jasmine-core/jasmine-html.js',
  './bower_components/jasmine-core/lib/jasmine-core/boot.js',
];

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

gulp.task('prepare-spec', function() {
  gulp.src(jasmine_files)
    .pipe(gulp.dest('./spec/lib'));
});

gulp.task('spec', ['prepare-spec'], function() {
  gulp.src('./spec')
    .pipe(webserver({
      open: true
    }));
});

gulp.task('default', function() {
  console.log('Hello from ready.js');
});
