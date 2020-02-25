var browserSync = require('browser-sync'),
    gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('app/sass/**/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('watch', gulp.parallel('browser-sync', 'sass', function() {
    gulp.watch('app/sass/**/*.sass', gulp.parallel('sass'));
    gulp.watch('app/*.html', browserSync.reload());
    gulp.watch('app/js/**/*.js', browserSync.reload());
}));

gulp.task( 'default', gulp.series('sass', 'browser-sync', 'watch') );

