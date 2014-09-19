gulp-jessy
==========

Convert Jessy files to Sass and/or Js as part as your gulp build process.

View [Jessy](https://github.com/Ulflander/jessy) to know what is Jessy and how to use it.

Released under MIT License.

## Examples

#### To Sass file

This task will create a `styles.scss` file in `tmp/`.

```
var gulp = require('gulp'),
    jessy = require('gulp-jessy');

gulp.task('jessy-to-js', function() {
    return gulp.src('src/styles.jessy')
        .pipe(jessy({
            target      : 'scss'
        }))
        .pipe(gulp.dest('tmp/'));
});
```

#### To Js file

This task will create a `styles.js` file in `tmp/`.

```
var gulp = require('gulp'),
    jessy = require('gulp-jessy');

gulp.task('jessy-to-js', function() {
    return gulp.src('src/styles.jessy')
        .pipe(jessy({
            target      : 'js'
        }))
        .pipe(gulp.dest('tmp/'));
});
```

## Options

- `symbol`: default `'$'` - Specifies prefix of Sass variables
- `target`: `'scss'` or `'js'`, default `'js'` - Specifies compilation target when using `fromFile` and `fromString` functions
- `namespace`: default `null`