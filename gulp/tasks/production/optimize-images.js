const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const size = require('gulp-size')
const config = require('../../config').optimize.images

/**
 * Copy and minimize image files
 */
gulp.task('optimize:images', function() {
  return gulp
    .src(config.src)
    .pipe(imagemin(config.options))
    .pipe(gulp.dest(config.dest))
    .pipe(size())
})
