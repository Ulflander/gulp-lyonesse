

var through = require('through2'),
    gutil = require('gulp-util'),
    jessy = require('jessy'),
    PluginError = gutil.PluginError,
    extend = require('util')._extend;

module.exports = function (options) {

    function write (f, enc, cb){
        if (f.isNull()) {
            this.push(file);
            return cb();
        }

        if (f.isStream()) {
            this.emit('error', new PluginError('gulp-jessy', 
                'Streaming not supported'));
            return cb();
        }

        options = extend({
            target: 'js',
            symbol: '$',
            namespace: null
        }, options);


        jessy.fromString(f.contents, options, function(err, result) {
            if (!!err) {
            this.emit('error', new PluginError('gulp-jessy', 
                'Streaming not supported'));
            }

            f.contents = result;
            f.path = f.path.replace(/\.jess$/gi, '.' + options.target);
            this.push(f);
            cb();
        });
    }

    function end (cb) {
        cb();
    }

    return through.obj(write, end);
};
