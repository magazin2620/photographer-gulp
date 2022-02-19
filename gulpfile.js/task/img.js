const { src, dest } = require('gulp');

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const webp = require('gulp-webp');
const gulpif = require('gulp-if');

const path = require("../config/path");
const app = require("../config/app");

const img = () => {
	return src(path.img.src, { sourcemaps: true })
		.pipe(plumber({
			errorHandler: notify.onError(error => ({
				title: "Image",
				message: error.message
			}))
		}))
		.pipe(newer(path.img.dest))
		.pipe(webp())
		.pipe(dest(path.img.dest, { sourcemaps: true }))
		.pipe(src(path.img.src))
		.pipe(newer(path.img.dest))
		.pipe(gulpif(app.isProd, imagemin({ verbose: true })))
		.pipe(dest(path.img.dest, { sourcemaps: true }));
};

module.exports = img;