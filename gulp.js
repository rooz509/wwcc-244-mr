const gulp = require('gulp');
const gulpCopy = require('gulp-copy');
const gulpClean = require('gulp-clean');
const del = require('del');


gulp.task('clean:all', function(done)
{
    //setTimeout(done, 2000);
    return del ('dist/*')
	// return gulp.src('dist/*')
	// 	.pipe(clean());
});

gulp.task('clean:vendor', function(done)
{
    //setTimeout(done, 2000);
    return del ('dist/vendor/*')
    // return gulp.src('dist/vendor/*')
		// .pipe(clean());
});

gulp.task('clean:main', function(done)
{
    //setTimeout(done, 2000);
    return del ('dist/**/*.js', 'dist/**/*.html', '!dist/vendor/**.*')
    // return gulp.src('dist/**/*.js', 'dist/**/*.html', '!dist/vendor/**.*')
		// .pipe(clean());
});

gulp.task('copy:main', function(done)
{
    //setTimeout(done, 1000);
    return gulp.src('client/**/*.html')
        .pipe(gulpCopy(''))
        .pipe(gulp.dest('dist/'));

});

gulp.task('copy:vendor', function(done)
{
    //setTimeout(done, 1000);
    return gulp.src('node_modules/jquery/dist/jquery.js')
        .pipe(gulpCopy(''))
        .pipe(gulp.dest('dist/vendor'));

});

gulp.task('build', function(done)
{
    setTimeout(done, 1500);
});

gulp.task('watch', function(done)
{
    //setTimeout(done, 1500);
	return gulp.watch(['client/**/*.js', 'client/**/*.html'],
		gulp.series('clean:main', 'copy:main'));

});


gulp.task('copy', gulp.parallel('copy:main', 'copy:vendor'));
gulp.task('default', gulp.parallel(['clean', 'copy', 'build']));
