var gulp = require('gulp');  
var sass = require('gulp-sass');
var sync = require('browser-sync').create();

//style paths
var path = { 
    sass : 'src/scss/*.scss',  
    css : 'src/css/',
    html: 'src/html/*.html'
};



gulp.task('compilaSass', function(){  
    gulp.src(path.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(path.css));
});

gulp.task('compilaHtml', function(){
    gulp.src(path.html)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(path.css));
});

gulp.task('iniciar',function() {  
    sync.init({
        server: {
            baseDir : "./src"
        },
        startPath : "/"
    });

    gulp.watch(path.sass ,['compilaSass']).on('change', sync.reload);
    // gulp.watch(path.html).on('change', sync.reload);
});

