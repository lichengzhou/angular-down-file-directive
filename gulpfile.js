var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    livereload = require('gulp-livereload'),
    tinylr = require('tiny-lr'),
    server = tinylr();

var lvr_port = 11852;

var source = {
	scripts: 'src/angular-city-select.js',
	demo: 'demo/*.html'
};

var build = {
	dir: 'dist'
};

gulp.task('scripts', function () {
    return gulp.src(source.scripts)
        .pipe(uglify())
        .on("error", handleError)
        .pipe(gulp.dest(build.dir))
        .pipe(livereload(server));
});

gulp.task('demo', function () {
    return gulp.src(source.demo)
        .on("error", handleError)
        .pipe(gulp.dest(build.dir))
        .pipe(livereload(server));
});

// Rerun the task when a file changes
gulp.task('watch', function () {
    try {
        server.listen(
          lvr_port,
          function (err) {

              if (err) { return console.log(err); }

              gulp.watch(source.scripts, ['scripts']);
              gulp.watch(source.demo, ['demo']);

          });
    }
    catch (e) {
        console.log(e);
    }

});

gulp.task('default', [
	'scripts',
	'demo',
	'watch'
]);



// Error handler
function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}