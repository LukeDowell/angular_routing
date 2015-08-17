/**
 * Created by Luke on 8/14/2015.
 */
var gulp = require('gulp');
var uglify = require('gulp-uglify');

//High level path
var path = {
    assets: "server/public/assets/",
    vendors: "server/public/vendors/"
};

//Location of our angular modules we wish to copy
var angularSources = [
    'node_modules/angular/angular.min.js',
    'node_modules/angular-route/angular-route.min.js"'
];

//Mmmmm ya gurl get minified
gulp.task('scripts', function(){
    return gulp.src('client/scripts/**/*')
        .pipe(uglify())
        .pipe(gulp.dest("server/public/assets/scripts"));
});

//Stylish babes yo
gulp.task('styles', function() {
    return gulp.src('client/styles/**/*')
        .pipe(gulp.dest(path.assets.concat("styles")));
});

//Ya look at dat view right thur
gulp.task('html', function() {
    return gulp.src('client/views/**/*')
        .pipe(gulp.dest(path.assets.concat("views")));
});

//Angular all over the place
gulp.task('angular', function() {
    return gulp.src(angularSources)
        .pipe(gulp.dest(path.vendors.concat("angular")));
});

//Who watches the watch task?
gulp.task('watch', function() {
    gulp.watch('client/scripts/**/*', ['scripts']);
    gulp.watch('client/styles/**/*', ['styles']);
    gulp.watch('client/views/**/*', ['html']);
});

//Task registration
gulp.task('default', ['scripts', 'styles', 'html', 'watch']);

