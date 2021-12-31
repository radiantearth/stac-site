const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const Prism = require('prismjs');
const loadLanguages = require('prismjs/components/');

loadLanguages(['py', 'json']);

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

    eleventyConfig.addPairedShortcode('highlight', function (code, language) {
        const html = Prism.highlight(code, Prism.languages[language], language);
        
        return html;
    })

    return {
        dir: {
            input: 'src/views',
            output: '_site',
        }
    }
}