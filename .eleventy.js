const path = require('path');
const fs = require('fs');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const Prism = require('prismjs');
const loadLanguages = require('prismjs/components/');

loadLanguages(['py', 'json']);

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("public");
    eleventyConfig.setDataDeepMerge(true);
    eleventyConfig.addWatchTarget("../public/**/*");
    
    eleventyConfig.addDataExtension("ipynb", contents => {
        return {
            notebook: JSON.parse(contents),
        };
    });

    eleventyConfig.addFilter('markdown', function (value) {
        let markdown = require('markdown-it')({
            html: true
        });
        return markdown.render(value);
    });

    eleventyConfig.setUseGitIgnore(false);
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.setLiquidOptions({
        strictFilters: false
    });

    eleventyConfig.addPairedShortcode('highlight', function (code, language) {
        const html = Prism.highlight(code, Prism.languages[language], language);
        
        return html;
    });

    eleventyConfig.addShortcode('svg', function (filename) {
        const svgPath = path.join(__dirname, `assets/svg/${filename}.svg`);
        const fileContents = fs.readFileSync(svgPath);

        return fileContents;
    });

    return {
        dir: {
            input: 'app',
            output: '_site',
        }
    }
}