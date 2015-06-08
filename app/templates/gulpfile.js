// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>
'use strict';

var buffer = require('buffer'),
    del = require('del'),
    gulp = require('gulp'),
    gulpConcat = require('gulp-concat'),
    gulpJshint = require('gulp-jshint'),
    gulpUglify = require('gulp-uglify'),
    jshintStylish = require('jshint-stylish'),
    map = require('map-stream'),
    replace = require('gulp-replace');    

gulp.task('scripts', function () {
  var header = new Buffer('// Copy this to your URL bar:\njavascript:');

  return gulp.src('app/{,*/}*.js')
    .pipe(gulpJshint())
    .pipe(gulpJshint.reporter(jshintStylish))
    .pipe(gulpUglify())
    .pipe(gulpConcat('bookmarklet.js'))
    .pipe(map(function (file, cb) {
      file.contents = buffer.Buffer.concat([header, file.contents]);
      cb(null, file);
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('postprocess', ['scripts'], function () {
    return gulp.src('build/bookmarklet.js')
        .pipe(replace(/!/, '('))
        .pipe(replace(/\(\);$/g, ')();'))
        .pipe(gulp.dest('dist'));;
});

gulp.task('clean', del.bind(null, 'dist'));

gulp.task('default', ['clean', 'scripts', 'postprocess']);

gulp.task('watch', function () {
  gulp.watch('app/{,*/}*.js', ['scripts']);
});
