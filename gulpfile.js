var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    ts = require('gulp-typescript'),
    spritesmith = require('gulp.spritesmith');
 

gulp.task('sass', function () {
    gulp.src('./public/stylesheets/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(function (f) {
            return f.base;
        }))
});
gulp.task('sass:watch',function(){
    gulp.watch('./public/stylesheets/*.scss',['sass']);
});
gulp.task('default', function () {
    //  gulp.watch('./public/stylesheets/**/*.scss',['sass']);
    gulp.src(['./node_modules/raphael/raphael.js','./public/javascript/cookies.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./public/javascript/'))

});
gulp.task('ts',function(){
    return gulp.src('./public/javascript/*.ts')
    .pipe(ts())
    .pipe(gulp.dest('./public/javascript/'));
});
gulp.task('ts:watch',function(){
    gulp.watch('./public/javascript/*.ts',['ts']);
});
gulp.task('sprite', function () {
     var spriteData =  gulp.src('./logos/*.png')
        .pipe(spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.css',
                
        }));

    return spriteData.pipe(gulp.dest('./public/stylesheets/'));

});