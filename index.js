

var through = require('through2'),
    gutil = require('gulp-util'),
    lyonesse = require('lyonesse'),
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
            self.emit('error', new PluginError('gulp-lyonesse', 
                'Streaming not supported'));
            return cb();
        }

        options = extend({
            target: 'js',
            symbol: '$',
            namespace: null
        }, options);


        lyonesse.fromString(f.contents.toString('utf-8'), options, function(err, result) {
            if (!!err) {
                self.emit('error', new PluginError('gulp-lyonesse', err));
            }

            f.contents = new Buffer(result);
            f.path = f.path.replace(/\.jess$/gi, '.' + options.target)
                .replace(/\.lyonesse$/gi, '.' + options.target);
            self.push(f);
            cb();
        });
    }

    function end (cb) {
        cb();
    }

    return through.obj(write, end);
};
