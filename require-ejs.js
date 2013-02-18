var fs = require('fs');


var path = require('path');

var ejs = require(path.resolve(path.join(__dirname, 'lib', 'ejs')));

function removeBOM(text) {
    if (text.indexOf('\uFEFF') === 0) {
        text = text.substring(1, text.length);
    }
    return text;
}

require.extensions['.ejs'] = function (module) {

    var filename = module.filename;

    var options = { filename: filename, client: true };

    if (process.env.NODE_ENV && process.env.NODE_ENV.toString().toLowerCase() === 'development') {
        options.compileDebug = true;
    }

    var template = removeBOM(fs.readFileSync(filename).toString());

    var fn = ejs.compile(template, options);
    
    var src = ['module.exports = ', fn.toString(), ';'];
    module._compile(src.join(''), filename);

};