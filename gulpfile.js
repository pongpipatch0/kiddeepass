const gulp = require('gulp')
const babel = require('gulp-babel')
const less = require('gulp-less')
const minifyCSS = require('gulp-csso')
const concat = require('gulp-concat')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')
const merge = require('merge2')

const paths = {
  assetsPath: 'public/assets/build/',
  devPath: 'public/assets/dev/',
  nodePath: 'node_modules/',
  semanticPath: 'public/assets/semantic-ui/'
}


gulp.task('js', function() {
  const streamOne = gulp.src([
    // paths.devPath + 'js/*.js',
    // paths.semanticPath + 'semantic.min.js'
    paths.devPath + 'js/turbolinks.js'
  ])
  .pipe(
    uglify().on('error', function(err) {
      console.log('err')
    })
  )

  return merge(streamOne)
  .pipe(concat('kiddeepass.min.js'))
  .pipe(gulp.dest(paths.assetsPath + 'js/'))
})


gulp.task('style', function() {
  return gulp.src([
    paths.devPath + 'less/*.less',
    paths.semanticPath + 'semantic.min.css'
  ])
  .pipe(sourcemaps.init())
  .pipe(
    less({
      outputStyle: 'compressed'
    })
  )
  .pipe(minifyCSS())
  .pipe(
    autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    })
  )
  .pipe(concat('kiddeepass.min.css'))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(paths.assetsPath + 'css/'))
})


gulp.task('watch', function() {
  gulp.watch(paths.devPath + 'less/*.less',['style'])
  gulp.watch(paths.devPath + 'js/*.js',['js'])
})

gulp.task('default',[
  'watch','style','js'
])