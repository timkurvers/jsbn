browserify = require('gulp-browserify')
clean      = require('gulp-rimraf')
gulp       = require('gulp')
header     = require('./header')
jshint     = require('gulp-jshint')
mocha      = require('gulp-mocha')
pkg        = require('./package.json')
plumber    = require('gulp-plumber')
rename     = require('gulp-rename')
uglify     = require('gulp-uglify')

gulp.task 'clean', ->
  gulp.src([
    'dist/**/*'
  ]).pipe clean()

gulp.task 'lint', ->
  gulp.src ['lib/**/*.js', 'spec/**/*.js']
      .pipe plumber()
      .pipe jshint()
      .pipe jshint.reporter('jshint-stylish')

gulp.task 'spec', ->
  gulp.src 'spec/**/*.js', read: false
      .pipe plumber()
      .pipe mocha(bail: true)

gulp.task 'release', gulp.series 'clean', ->
  gulp.src 'lib/index.js'
      .pipe browserify(standalone: 'JSBN')
      .pipe rename("#{pkg.name}.js")
      .pipe header(pkg)
      .pipe gulp.dest('dist')
      .pipe uglify()
      .pipe header(pkg)
      .pipe rename("#{pkg.name}.min.js")
      .pipe gulp.dest('dist')

gulp.task 'watch', ->
  gulp.watch ['lib/**/*.js', 'spec/**/*.js'], gulp.series(
    'lint', 'spec'
  )

gulp.task 'default', gulp.series(
  'lint', 'spec', 'watch'
)
