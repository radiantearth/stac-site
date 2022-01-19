const shortcodes = require('./config/shortcodes.js');
const filters = require('./config/filters.js');

const markdownIt = require("markdown-it");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const i18n = require('eleventy-plugin-i18n');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("public");
    eleventyConfig.setDataDeepMerge(true);
    eleventyConfig.addWatchTarget("../public/**/*");
    
    eleventyConfig.addDataExtension("ipynb", contents => {
        return {
            notebook: JSON.parse(contents),
        };
    });

    eleventyConfig.setUseGitIgnore(false);
    eleventyConfig.addPlugin(syntaxHighlight);

    eleventyConfig.addPlugin(i18n, {
        translations: {},
        fallbackLocales: {
            '*': 'en'
        }
    });

    eleventyConfig.setLiquidOptions({
        strictFilters: false
    });

        
    eleventyConfig.setLibrary("md", 
        markdownIt({ html: true }).use(require('markdown-it-div'))
    );

    filters(eleventyConfig);
    shortcodes(eleventyConfig);

    return {
        dir: {
            input: 'app',
            output: '_site',
            includes: '_includes',
            layouts: '_layouts',
            markdownTemplateEngine: 'liquid',
        }
    }
}