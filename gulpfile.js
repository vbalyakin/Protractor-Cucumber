const gulp = require('gulp'),
 protractor = require('gulp-protractor').protractor;

 gulp.task('runTests', function() {
 	return gulp.src('features/*.feature')
 	.pipe(protractor({
 		configFile: "./test/e2e/config/protractor.config.js",
 		}))
 		.on('end', function () {
 			console.log('The Best of the Best of the Best');
 		});
 });

 gulp.task('explore', function() {
	return gulp.src('./test/e2e/features/explore.feature')
	.pipe(protractor({
		configFile: "./test/e2e/config/protractor.config.js",
		}))
		.on('end', function () {
			console.log('The Best of the Best of the Best');
		});
});

gulp.task('sections', function() {
	return gulp.src('./test/e2e/features/sections.feature')
	.pipe(protractor({
		configFile: "./test/e2e/config/protractor.config.js",
		}))
		.on('end', function () {
			console.log('The Best of the Best of the Best');
		});
});

gulp.task('shop', function() {
	return gulp.src('./test/e2e/features/shop.feature')
	.pipe(protractor({
		configFile: "./test/e2e/config/protractor.config.js",
		}))
		.on('end', function () {
			console.log('The Best of the Best of the Best');
		});
});
