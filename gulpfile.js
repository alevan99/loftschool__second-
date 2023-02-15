const { src, dest, task, series, watch, parallel } = require("gulp");
const rm = require( 'gulp-rm' );
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
// const px2rem = require('gulp-smile-px2rem');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
// const svgo = require('gulp-svgo');
// const svgSprite = require('gulp-svgSprite');
const gulpif = require('gulp-if');


const env = process.env.NODE_ENV;
// const config = require('./gulp.config')
sass.compiler = require('node-sass');

task( 'clean', () => {
  return src( "dist/**/*", { read: false }).pipe(rm());
});

task("copy:html", () => {
	return src("*.html")
	.pipe(dest("dist"))
	.pipe(reload({stream: true}));
});

const styles = [
	'node_modules/normalize.css/normalize.css',
	"css/main.myy.scss"
]

task("styles", () => {
	return src(styles)
		.pipe(gulpif(env === 'dev', sourcemaps.init()))
		.pipe(concat("main.myy.scss"))
		.pipe(sassGlob())
		.pipe(sass().on('error', sass.logError))
		// .pipe(px2rem())
		.pipe(gulpif(env === 'dev',
			autoprefixer({
			// browsers: ['last 2 versions'],
			cascade: false
		}))
			)
		// .pipe(gcmq())
		.pipe(gulpif(env === 'prod',cleanCSS()))
		.pipe(gulpif(env === 'dev', sourcemaps.write()))
		.pipe(dest('dist'))
		.pipe(reload({stream: true}));
});

task('scripts', () => {
	return src("./js/*.js")
	.pipe(gulpif(env === 'dev', sourcemaps.init()))
	.pipe(concat("main.js"))
	.pipe(gulpif(env === 'dev', babel({
		presets: ['@babel/env']
	})))
	.pipe(sourcemaps.write())
	.pipe(dest('dist'))
	.pipe(reload({stream: true}));
});

task('icons', () => {
	return src("*.svg")
	.pipe(dest("dist"))
})

task('copy:img', () => {
	return src("img/*.*")
	.pipe(dest("dist/img"))
})

task('copy:fonts', () => {
	return src("fonts/**/*.*")
	.pipe(dest("dist/fonts"))
})

task('server', () => {
	browserSync.init({
			server: {
					baseDir: "./dist"
			},
			open: false
	});
});

task('watch', () => {
	watch('css/**/*.scss', series("styles"));
	watch('*.html', series("copy:html"));
	watch('js/*.js', series("scripts"));
})


task("default", 
	series("clean", 
	parallel("copy:html", "styles", "scripts", "icons", "copy:img", "copy:fonts"), 
	parallel("watch", "server")
	)
);

task("build", 
	series("clean", 
	parallel("copy:html", "styles", "scripts", "icons", "copy:img", "copy:fonts"), 
	)
);