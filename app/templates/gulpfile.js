// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>

'use strict';

var buffer = require('buffer');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var map = require('map-stream');
var uglify = require('gulp-uglify');


gulp.task('scripts', function () {
  var header = new Buffer('// Copy this to your URL bar:\njavascript:', 'utf-8');

  gulp.src('app/{,*/}*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(uglify())
    .pipe(concat('bookmarklet.js'))
    .pipe(map(function (file, cb) {
      file.contents = buffer.Buffer.concat([header, file.contents]);
      cb(null, file);
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('clean', function () {
  gulp.src('dist').pipe(clean());
});

gulp.task('default', function () {
  gulp.run('clean', 'scripts');
});

gulp.task('watch', function () {
  gulp.watch('app/{,*/}*.js', function () {
    gulp.run('scripts');
  });
});
