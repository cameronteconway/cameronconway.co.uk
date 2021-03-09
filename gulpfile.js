const { src, series, parallel, dest, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const terser = require('gulp-terser');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');

// const css = () => {
//     return src('src/styles.css')
//         .pipe(postcss([cssnano()]))
//         .pipe(dest('dist', { sourcemaps: '.' }));
// }

// const js = () => {
//     return src('src/index.js', { sourcemaps: true })
//         .pipe(terser())
//         .pipe(dest('dist', { sourcemaps: '.' }));
// }

const browserSyncServe = (cb) => {
    browserSync.init({
        server: {
            baseDir: './',
        }
    });
    cb();
}

function browserSyncReload(cb){
    browserSync.reload();
    cb();
}

function watchTask(){
    watch('*.html', browserSyncReload);
    watch(['src/*.css', 'src/*.js'], series(browserSyncReload));
  }

exports.default = series(
    // css,
    // js,
    browserSyncServe,
    watchTask
);
