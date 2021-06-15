var gulp = require('gulp');
var say = require('say');
var fs = require('fs');
var shared = require('./lib/shared');
var audio_files_path = './audio_files/';

gulp.task('default', function () {
    console.log('sup');
});

gulp.task('build:audio', function () {
    if (!fs.existsSync(audio_files_path)) {
        fs.mkdirSync(audio_files_path);
    }
    shared.types().forEach(function (column) {
        for (var i = shared.ranges[column].min; i <= shared.ranges[column].max; i++) {
            var text = column + ', ' + i;
            var file_name = audio_files_path + column + '_' + i + '.wav';
            say.export(text, 'Alex', 0.85, file_name, function (err) {
                if (err) {
                    return console.error(err);
                }
                console.log('Text has been saved to ' + file_name);
            });
        }
    });
});