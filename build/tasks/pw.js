import gulp from 'gulp';
import cp from '../util/cp.js';
import rm from '../util/rm.js';
import pkg from '../util/pkg.js';

const config = pkg.config;
const assets = `${config.pw}/assets`;
const urlTemplates = `${assets}/site/templates`;

// tasks.pw
export const pw = gulp.series(
	() => cp(`${config.src}/favicon/*`, assets),
	() => cp(`${config.dist}/img/*.*`, `${urlTemplates}/img`),
	() => cp(`${config.dist}/symbol/*`, `${urlTemplates}/symbol`),
	() => cp(`${config.dist}/fonts/**/*`, `${urlTemplates}/fonts`),
	() => cp(`${config.dist}/js/**/*`, `${urlTemplates}/js`),
	() => cp(`${config.dist}/css/*.css`, `${urlTemplates}/css`),
	() => rm(`${urlTemplates}/css/main.min.css`),
	() => cp(`${config.src}/scss/**/*`, `${urlTemplates}/css`),
	() => cp(`${config.src}/html/**/*.hbs`, `${config.pw}/hbs`),
	() => cp(`${config.dist}/*.html`, `${config.pw}/html`),
);
