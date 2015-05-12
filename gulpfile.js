'use strict';

var gulp = require('gulp');
var gulpESLint = require('gulp-eslint-simple');

gulp.task('lint', function() {
	return gulp
		.src(['**/*.js', '!node_modules/**/*.js'])
		.pipe(gulpESLint());
/*		.pipe(gulpESLint.format())
		.pipe(gulpESLint.failOnError());*/
});
