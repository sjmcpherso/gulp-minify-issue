var gulp = require('gulp'),
  less = require('gulp-less'),
  minifyCss = require('gulp-minify-css'),
  sourcemaps = require('gulp-sourcemaps');  


gulp.task('less', function () {
  gulp.src('less/master.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(sourcemaps.write('./maps', {debug: true}))
    .pipe(gulp.dest('dist/'))
});