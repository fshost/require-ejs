var fs = require('fs');
var path = require('path');

exports.removeBOM = function (text) {
    if (text.indexOf('\uFEFF') === 0) {
        text = text.substring(1, text.length);
    }
    return text;
};

exports.read = function (filename) {
    var content = fs.readFileSync(filename, 'utf8').toString();
    return exports.removeBOM(content);
};

exports.escape = function (html) {
    return String(html)
      .replace(/&(?!\w+;)/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
};


exports.resolvePath = function (name, filename) {
    var filepath = path.join(path.dirname(filename), name);
    var ext = path.extname(name);
    if (!ext) filepath += '.ejs';
    return filepath;
}
