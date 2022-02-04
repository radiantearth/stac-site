const shortcodes = require('./config/shortcodes');
const filters = require('./config/filters');
const localize = require('./config/localize');
const markdown = require('./config/markdown');
const { version: buildVersion }  = require('./package.json');

const { EleventyRenderPlugin } = require("@11ty/eleventy");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
    // File Structure
    eleventyConfig.addPassthroughCopy("public");
    eleventyConfig.addPassthroughCopy("assets/notebooks");
    eleventyConfig.addWatchTarget("../public/**/*");
    eleventyConfig.addWatchTarget("../config/**/*");
    eleventyConfig.addDataExtension("ipynb", contents => {
        return {
            notebook: JSON.parse(contents),
        };
    });
    
    // Settings
    eleventyConfig.addGlobalData('buildversion', buildVersion);
    eleventyConfig.setUseGitIgnore(false);
    eleventyConfig.setDataDeepMerge(true);

    eleventyConfig.setLibrary("md", markdown);

    // Plugins
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(EleventyRenderPlugin);
    

    // Filters & Shortcodes
    localize(eleventyConfig);
    filters(eleventyConfig);
    shortcodes(eleventyConfig);

    // Options
    return {
        dir: {
            input: 'app',
            output: '_site',
            includes: '_templates',
            layouts: '_templates/layouts',
        },
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
    }
}