var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    prefix = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    htmlmin = require('gulp-htmlmin'),
    imagemin = require('gulp-imagemin'),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch'),
    connect = require('gulp-connect'),
    browserify = require('gulp-browserify'),
    usemin = require('gulp-usemin'),
    minifyCss = require('gulp-minify-css');



var sassDir = 'styles/sass';
jsDir = 'js';
imgDir = 'img';



gulp.task('image', function() {
    gulp.src('img/*')
        .pipe(imagemin({
            progressive: true,
            optimizationLevel: 5
        }))
        .pipe(gulp.dest('minimg'));
});



gulp.task('minify', function() {
    gulp.src('**/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('./dist'));
});


gulp.task('sass', function() {
    return gulp.src(sassDir + '/*.scss')
        .pipe(sass({
            style: 'compressed'
        }))
        .pipe(prefix("last 10 versions", "> 1%", "ie 8", "ie 7"))
        .pipe(gulp.dest('styles/css/'))
        .pipe(livereload());
});

//dont forget to put the ng before the function to add angular injector
gulp.task('bundle', function() {
    gulp.src(jsDir + '/main.js')
        .pipe(browserify({
            debug: true
        }))
        .pipe(uglify())
        .pipe(gulp.dest('min-js'))
        .pipe(livereload());
});
gulp.task('live', function() {
    gulp.src(['*.html', 'views/*.html'])
        .pipe(livereload());
});

gulp.task('watch', function() {
    gulp.watch(sassDir + '/*.scss', ['sass']),
    gulp.watch(jsDir + '/**/*.js', ['bundle']),
    gulp.watch(imgDir + '/*', ['image']),
    gulp.watch('*.html', ['live']),
    gulp.watch('views/*', ['live'])
})

gulp.task('connect', function() {
    connect.server({
        port: 3000
    });
});

gulp.task('usemin', function() {
    gulp.src('./*.html')
        .pipe(usemin({
            cssmin: minifyCss()
        }))
        .pipe(gulp.dest('build/'));
});

gulp.task('default', ['connect', 'watch', 'bundle']);