const { src, dest, watch, series } = require('gulp')
const { execSync } = require('child_process')
const sourcemaps = require('gulp-sourcemaps')
// typescript
const ts = require('gulp-typescript')
const tsProject = ts.createProject('./tsconfig.json')

function Generate() {
  return src('./src/**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(tsProject())
    .pipe(sourcemaps.write('.', { sourceRoot: '../serverSrc' }))
    .pipe(dest('./dist'))
}

/**
 * 提升版本号尾缀
 */
function versionPrereAdd() {
  try {
    execSync('npm version prerelease --no-git-tag-version ')
  } catch (err) {
    throw 'versionPrereAdd' + err
  }
}

/**
 * 提升版本小号
 */
function versionPrepatchAdd() {
  try {
    execSync('npm version prepatch --no-git-tag-version ')
  } catch (err) {
    throw 'versionPrereAdd' + err
  }
}

/**
 * 监听函数
 */

function GenerateWatch() {
  watch('./src/**/*.ts', series(Generate))
}

exports.generate = series(Generate)
exports.default = series(Generate)
exports.watch = GenerateWatch
