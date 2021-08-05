var gulp = require('gulp');
var gulpless = require('gulp-less');
var gulpautoprefixer = require('gulp-autoprefixer');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('less', function() {
    return gulp
        .src('./src/app.less')
        .pipe(gulpless())
        .pipe(gulpautoprefixer({browsers: ['last 2 versions','>5%']})
            .pipe(concat("application.css")))
        .pipe(gulp.dest("./../css/"));
});

// gulp.task('pack-css', function () {
//     return gulp.src(['../../css/application.css'])
//         .pipe(concat('application.css'))
//         .pipe(rename('application.css'))
//         .pipe(gulp.dest('../../css/'));
// });

gulp.task('watch', function() {
    return gulp
        .watch("./src/*.less", gulp.series("less"))
});