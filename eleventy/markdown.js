const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItDiv = require('markdown-it-div');

const markdown = markdownIt({
    html: true,
}).use(markdownItAttrs, {
    leftDelimiter: '{',
    rightDelimiter: '}',
});

module.exports = markdown;
