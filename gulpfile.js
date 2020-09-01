const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

//Gulp dependencies go here

gulp.task('default', function(){
    //Gulp tasks go here
    gulp.src(['es6/**/*.js', 'public/es6/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format());

    gulp.src("es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));

    gulp.src("public/es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("public/dist"));

    return new Promise(function(resolve, reject) {
        console.log("HTTP Server Started");
        resolve();
    });
});