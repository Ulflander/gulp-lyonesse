

var through = require('through2'),
    gutil = require('gulp-util'),
    jessy = require('jessy'),
    PluginError = gutil.PluginError,
    extend = require('util')._extend;

module.exports = function (options) {

    function write (f, enc, cb){
        var self = this;

        if (f.isNull()) {
            self.push(file);
            return cb();
        }

        if (f.isStream()) {
            self.emit('error', new PluginError('gulp-jessy', 
                'Streaming not supported'));
            return cb();
        }

        options = extend({
            target: 'js',
            symbol: '$',
            namespace: null
        }, options);


        jessy.fromString(f.contents.toString('utf-8'), options, function(err, result) {
            if (!!err) {
            self.emit('error', new PluginError('gulp-jessy', 
                'Streaming not supported'));
            }

            f.contents = new Buffer(result);
            f.path = f.path.replace(/\.jess$/gi, '.' + options.target)
                .replace(/\.jessy$/gi, '.' + options.target);
            self.push(f);
            cb();
        });
    }

    function end (cb) {
        cb();
    }

    return through.obj(write, end);
};
