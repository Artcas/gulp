var gulp = require('gulp'),
 concatCSS  = require('gulp-concat-css'),
 cleanCSS = require('gulp-clean-css'),
 rename = require('gulp-rename'),
 notify = require('gulp-notify'),
 watch = require('gulp-watch'),
 autoprefixer = require('gulp-autoprefixer'),
 connect = require('gulp-connect'),
 livereload = require('gulp-livereload');



// Gulp Connect

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload:true

  });
});

gulp.task('css', function() {
  gulp.src('css/*.css')
  .pipe(concatCSS('all.css'))
  .pipe(cleanCSS(''))
  .pipe(rename('all.min.css'))
  .pipe(autoprefixer({browsers: ['> 1%', 'IE 7'], cascade: false }))
  .pipe(gulp.dest('app/'));
});



gulp.task('html', function () {
  gulp.src('app/index.html')
    .pipe(connect.reload());
});




gulp.task('watch',function(){
	gulp.watch('css/*.css' , ['css'])
	gulp.watch('app/index.html', ['html'])
})


gulp.task('default', ['connect','watch','css','html']);
