import gulp from 'gulp';
import plumber from 'gulp-plumber';
import less from 'gulp-less';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import csso from 'postcss-csso';
import rename from 'gulp-rename';
import htmlmin from 'gulp-htmlmin';
import squoosh from 'gulp-libsquoosh';
import svgo from 'gulp-svgmin';
import svgstore from 'gulp-svgstore';
import del from 'del';
import browser from 'browser-sync';

// Styles

export const styles = () => {
  return gulp.src('source/less/style.less', { sourcemaps: true })
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer(),
      csso()
    ]))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css', { sourcemaps: '.' }))
    .pipe(browser.stream());
}

// HTML minimize

const htmlMinimize = () => {
  return gulp.src('source/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('build'));
}

// Scripts

const scripts = () => {
  return gulp.src('source/js/*.js')
  .pipe(gulp.dest('build/js'))
  .pipe(browser.stream());
}

//Optimize Images

const optomizeImages = () => {
  return gulp.src('source/images/**/*.{jpg,png}')
    .pipe(squoosh())
    .pipe(gulp.dest('build/images'))
}

// Copy Images

const copyImages = () => {
  return gulp.src('source/images/**/*.{jpg,png}')
    .pipe(gulp.dest('build/images'))
}

// Create WebP

const createWebp = () => {
  return gulp.src('source/images/**/*.{jpg,png}')
    .pipe(squoosh({
      webp: {}
    }))
    .pipe(gulp.dest('build/images'))
}

// SVG

const optimizeSvg = () => {
  return gulp.src(['source/images/**/*.svg', '!source/images/sprites/*.svg'])
    .pipe(svgo())
    .pipe(gulp.dest('build/images'));
}

// Sprites

const spriteSvg = () => {
  return gulp.src('source/images/sprites/*.svg')
    .pipe(svgo())
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename('optimize-sprite.svg'))
    .pipe(gulp.dest('build/images'));
}

// Copy

const copy = (done) => {
  return gulp.src([
      'source/fonts/**/*.{woff2,woff}',
      'source/*.ico',
      'source/*.webmanifest',
      'source/images/**/*.webp'
    ], {
      base: 'source'
    })
    .pipe(gulp.dest('build'))
    done();
}

// Clean

const clean = () => {
  return del('build')
}

// Server

const server = (done) => {
  browser.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

// Reload

const reload = (done) => {
  browser.reload();
  done();
  }

// Watcher

// const watcher = () => {
//   gulp.watch('source/less/**/*.less', gulp.series(styles));
//   gulp.watch('source/*.html').on('change', browser.reload);
//   gulp.watch('source/js/*.js').on('change', browser.reload);
// }

const watcher = () => {
  gulp.watch('source/less/**/*.less', gulp.series(styles));
  gulp.watch('source/js/*.js', gulp.series(scripts));
  gulp.watch('source/*.html', gulp.series(htmlMinimize, reload));
}

// Build

export const build = gulp.series (
  clean,
  copy,
  optomizeImages,
  gulp.parallel (
    styles,
    htmlMinimize,
    scripts,
    createWebp,
    spriteSvg,
    optimizeSvg
  ),
);

// Default

export default gulp.series (
  clean,
  copy,
  copyImages,
  gulp.parallel (
    styles,
    htmlMinimize,
    scripts,
    // createWebp,
    spriteSvg,
    optimizeSvg
  ),
  gulp.series (
    server,
    watcher
));
