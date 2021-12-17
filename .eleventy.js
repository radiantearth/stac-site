const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("public");
    eleventyConfig.setDataDeepMerge(true);
    eleventyConfig.addDataExtension("ipynb", contents => JSON.parse(contents));

    eleventyConfig.addFilter('markdown', function (value) {
        let markdown = require('markdown-it')({
            html: true
        });
        return markdown.render(value);
    })

    eleventyConfig.addPlugin(syntaxHighlight);

    return {
        dir: {
            input: 'src/views',
            output: '_site',
        }
    }
}