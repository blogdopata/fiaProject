var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
// Esto se agregara a la tarea de sass
var autoprefixer = require('gulp-autoprefixer');

//Primera tarea
//src origin
gulp.task('sass',function(){
	//origen
	gulp.src('scss/app.scss')
		.pipe(autoprefixer())
		.pipe(sass({
			includedPaths:['scss']
		}))//destino
		.pipe(gulp.dest('app/css'));

});

//browsersyncs para crear un pequeño servidor
// primero se ejecutara la funcion luego sass y luego serve
gulp.task('serve',['sass'], function(){
		browserSync.init(["app/css/*.css", "app/js/*.js","app/*.html"], {
			server:{
				baseDir:'app'
			}
		})
});
// Gulp watch para estar pendiente de todos los cambios  del scss 
//gulp.watch(['scss/*.scss'], ['sass']
// ['sass']-> para qu este atento a esa tarea
 gulp.task('watch',['sass',"serve"],function(){
	gulp.watch(['scss/*.scss'], ['sass']);
});



// para ejecutar x defaul con nombre de tarea gulp
gulp.task('default',['watch']);
