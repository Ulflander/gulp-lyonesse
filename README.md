gulp-lyonesse
==========

Convert Lyonesse files to Sass and/or Js as part as your gulp build process.

View [Lyonesse](https://github.com/Ulflander/lyonesse) to know what is Lyonesse and how to use it.

Released under MIT License.


## Install

```
npm install --save-dev gulp-lyonesse
```


## Examples

#### To Sass file

This task will create a `styles.scss` file in `tmp/`.

```
var gulp = require('gulp'),
    lyonesse = require('gulp-lyonesse');

gulp.task('lyonesse-to-scss', function() {
    return gulp.src('src/styles.lyonesse')
        .pipe(lyonesse({
            target      : 'scss'
        }))
        .pipe(gulp.dest('tmp/'));
});
```

#### To Js file

This task will create a `styles.js` file in `tmp/`.

```
var gulp = require('gulp'),
    lyonesse = require('gulp-lyonesse');

gulp.task('lyonesse-to-js', function() {
    return gulp.src('src/styles.lyonesse')
        .pipe(lyonesse({
            target      : 'js'
        }))
        .pipe(gulp.dest('tmp/'));
});
```

## Options

- `symbol`: default `'$'` - Specifies prefix of Sass variables
- `target`: `'scss'` or `'js'`, default `'js'` - Specifies compilation target when using `fromFile` and `fromString` functions
- `namespace`: default `null`
- `closure`: default `false` - For JS only, enclose result in a closure (nested namespaces only)

## Changelog

- 0.1.9: Update Lyonesse to 0.1.2
- 0.1.10: Update Lyonesse to 0.1.3
- 0.2.0: Update Lyonesse to 0.2.0
- 0.3.0: Rebranding! Udate Lyonesse to 0.3.0
