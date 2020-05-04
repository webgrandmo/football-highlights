var gulp = require('gulp');
var sass = require('gulp-sass');
// Development Tasks 
// -----------------

gulp.task('sass', function () {
  return gulp.src('./css/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass().on('error', sass.logError)) // Passes it through a gulp-sass, log errors to console
    .pipe(gulp.dest('./css')); // Outputs it in the css folder
});

gulp.task('watch', function () {
  gulp.watch('./css/scss/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('watch'), gulp.series('sass'));