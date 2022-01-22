const shortcodes = require('./config/shortcodes.js');
const filters = require('./config/filters.js');

const { EleventyRenderPlugin } = require("@11ty/eleventy");
const markdownIt = require("markdown-it");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const i18n = require('eleventy-plugin-i18n');

module.exports = function(eleventyConfig) {
    // File Structure
    eleventyConfig.addPassthroughCopy("public");
    eleventyConfig.addPassthroughCopy("assets/notebooks");
    eleventyConfig.addWatchTarget("../public/**/*");
    eleventyConfig.addDataExtension("ipynb", contents => {
        return {
            notebook: JSON.parse(contents),
        };
    });

    // Settings
    eleventyConfig.setUseGitIgnore(false);
    eleventyConfig.setDataDeepMerge(true);
    eleventyConfig.setLibrary("md", 
        markdownIt({ html: true }).use(require('markdown-it-div'))
    );

    // Plugins
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(EleventyRenderPlugin);
    eleventyConfig.addPlugin(i18n, {
        translations: {},
        fallbackLocales: {
            '*': 'en'
        }
    });

    // Filters & Shortcodes
    filters(eleventyConfig);
    shortcodes(eleventyConfig);

    // Options
    return {
        dir: {
            input: 'app',
            output: '_site',
            includes: '_includes',
            layouts: '_layouts',
        },
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
    }
}