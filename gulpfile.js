var gulp = require('gulp'),
		browserSync = require('browser-sync'),
		sass = require('gulp-sass'),
		concat = require('gulp-concat'),
		uglify = require('gulp-uglifyjs'),
		autoprefixer = require('gulp-autoprefixer');

gulp.task('scripts', function(){
	return gulp.src([
			'app/libs/jquery/dist/jquery.min.js',
			'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js',
			'app/libs/greensock-js/src/minified/jquery.gsap.min.js',
			'app/libs/greensock-js/src/minified/TweenMax.min.js',
			'app/libs/greensock-js/src/minified/TimelineMax.min.js',
			'app/libs/greensock-js/src/minified/easing/EasePack.min.js'
		])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'));
});

gulp.task('sass', function(){
	return gulp.src('app/sass/*.sass')
		.pipe(sass())
		.pipe(autoprefixer(['last 15 versions', '>1%', 'ie 8', 'ie 7'], {cascade: true}))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: "app"
		},
		notify: false
	});
});

gulp.task('watch', ['browser-sync', 'sass', 'scripts'], function(){
	gulp.watch('app/sass/*.sass', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});