gulp-jessy
==========

Convert Jessy files to Sass and/or Js as part as your gulp build process.

### To Sass file

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

### To Js file

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