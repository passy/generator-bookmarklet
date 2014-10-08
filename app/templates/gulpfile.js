// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>
'use strict';

var buffer = require('buffer');
var del = require('del');
var gulp = require('gulp');
var gulpConcat = require('gulp-concat');
var gulpJshint = require('gulp-jshint');
var gulpUglify = require('gulp-uglify');
var jshintStylish = require('jshint-stylish');
var map = require('map-stream');

gulp.task('scripts', function() {
  var header = new Buffer('// Copy this to your URL bar:\njavascript:');

  gulp.src('app/{,*/}*.js')
    .pipe(gulpJshint())
    .pipe(gulpJshint.reporter(jshintStylish))
    .pipe(gulpUglify())
    .pipe(gulpConcat('bookmarklet.js'))
    .pipe(map(function(file, cb) {
      file.contents = buffer.Buffer.concat([header, file.contents]);
      cb(null, file);
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function(cb) {
  del('dist', cb);
});

gulp.task('default', ['clean', 'scripts']);

gulp.task('watch', function() {
  gulp.watch('app/{,*/}*.js', ['scripts']);
});