var gulp= require('gulp');
var browserSync = require('browser-sync').create();// load module cua node_modules

var style_src="src/styles/*css", style_dst="build/styles/";
var img_src="src/images/*", img_dst="build/images/";

gulp.task('style',function(){
	gulp.src(style_src)
	.pipe(gulp.dest(style_dst))
	.pipe(browserSync.stream());
	
});
gulp.task('img',function(){
	gulp.src(img_src)
	.pipe(gulp.dest(img_dst))
	.pipe(browserSync.stream());
});
gulp.task('browserSync',['style','img'], function() {
	browserSync.init({
		server: "./"
	});
	gulp.watch(style_src, ['style']);
	gulp.watch(img_src,['img']);
	gulp.watch('index.html').on('change',browserSync.reload);

});
gulp.task('default', ['browserSync'], function(){
	
});
/*Trinh tu thuc hien
0.Load module ve node_modules
1. load file css tu src sang build
2. load image tu src sang build
3. neu css thay doi thi reload lai page
4. neu html thay doi thi reload
5. neu image thay doi reload
*/