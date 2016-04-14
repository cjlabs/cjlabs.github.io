'use strict';

var gulp = require("gulp")
var bower = require("gulp-bower");
var concat= require("gulp-concat");
var rename= require("gulp-rename");
var config =require("./gulp.config.json");
		

gulp.task("bower", function(){
	return bower()
	.pipe(gulp.dest(config.bowerDir));	
});

// compress all scripts from assets
gulp.task("scripts", function(){
	return gulp.src(config.jsDir + "/*.js")
	.pipe(concat("main.js"))
	.pipe(gulp.dest("build/js"));

});

gulp.task("css",function(){
	
});

gulp.task("icons", function(){
	return gulp.src(config.bowerDir + '/font-awesome/fonts/**.*')
	.pipe(gulp.dest('assets/fonts'));						      							
});
	
gulp.task("default", ["bower","icons"]);
