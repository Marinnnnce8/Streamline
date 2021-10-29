import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import { svgo } from 'gulp-imagemin';
import svgSprite from 'gulp-svg-sprite';
import pkg from '../util/pkg.js';

const config = pkg.config;

function createSprite() {
	return gulp.src(`${config.src}/icons/*.svg`)
		.pipe(imagemin([ // @todo can settings be improved?
			svgo({
				plugins: [
					{removeViewBox: false}
				]
			})
		]))
		.pipe(svgSprite({
			mode: {
				symbol: {
					sprite: 'icons.svg'
				},
			},
			svg: {
				namespaceClassnames: false
			}
		}))
		.pipe(gulp.dest(config.dist));
}

// tasks.icons
export const icons = createSprite;
