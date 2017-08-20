  var gulp = require("gulp");   
  var browserSync = require("browser-sync");
  var sass = require('gulp-sass');
  var coffee = require('gulp-coffee')
  var reload = browserSync.reload;

  gulp.task("sass",function(){ //create another task "sass"

    gulp.src('assets/*.scss')//input
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))//set the output format
      .pipe(gulp.dest('assets/'));

     reload();
  });

  gulp.task('coffee', function() {
    gulp.src('./assets/*.coffee')
      .pipe(coffee({bare: true}))
      .pipe(gulp.dest('./assets/'));

    reload()
  });

  gulp.task("server",["sass","coffee"],function(){
    browserSync({
      server:{
        baseDir: "."//set the dir for index.html
      }
    });
    
    gulp.watch("assets/*.coffee",["coffee"]);//use "sass" task to deal with changes in sass
    gulp.watch("assets/*.scss",["sass"]);//use "sass" task to deal with changes in sass
    gulp.watch("*.html",reload);
  
  });
      