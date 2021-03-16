const gulp = require('gulp');
const concat = require('gulp-concat');

const vendorsScripts = [
  'node_modules/svg4everybody/dist/svg4everybody.min.js'
];

module.exports = function vendors(cb) {
  return vendorsScripts.length
    ? gulp.src(vendorsScripts)
      .pipe(concat('libs.js'))
      .pipe(gulp.dest('dist/js/'))
    : cb();
};

const vendorsStyle = [
  'dev/vendor/swiper-bundle.min.css'
];

module.exports = function vendors(cb) {
  return vendorsStyle.length
    ? gulp.src(vendorsStyle)
      .pipe(concat('libs.css'))
      .pipe(gulp.dest('dist/vendor/'))
    : cb();
};
