var gulp = require('gulp');
var sass = require('gulp-sass');
var rimraf = require('gulp-rimraf');
var browserSync = require('browser-sync');

gulp.task('clean', function() {
	return gulp.src('public/css/*.css')
		.pipe(rimraf());
});

gulp.task('sass', function() {
	return gulp.src('assets/sass/main.scss')
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(gulp.dest('public/css'))
		.pipe(browserSync.stream());
});

gulp.task('default', ['clean', 'sass'], function() {
	var files = [
		'public/**/*.*'
	];
	browserSync.init(files, {
		server: 'public'
	});
	gulp.watch(['assets/sass/**/*.scss'], ['sass']);
});