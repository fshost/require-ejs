require(__dirname + '/../require-ejs');

var assert = require('assert');

var page = require(__dirname + '/views/layout');
var expected = '<b>test-page</b><p>test page text</p>';
var result = page({ title: 'test-page', text: 'test page text' });

assert.equal(result, expected);

