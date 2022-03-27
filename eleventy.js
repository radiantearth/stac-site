const markdown = require('./eleventy/markdown.js');
const { version: buildVersion } = require('./package.json');

const { EleventyRenderPlugin } = require('@11ty/eleventy');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const eleventyEvents = require('./eleventy/events');

module.exports = function (eleventyConfig) {
    eleventyEvents.init(eleventyConfig);

    // Filters & Shortcodes
    require('./eleventy/filters.js')(eleventyConfig);
    require('./eleventy/localize')(eleventyConfig);
    require('./eleventy/categories.js')(eleventyConfig);
    require('./eleventy/tutorials.js')(eleventyConfig);
    require('./eleventy/shortcodes.js')(eleventyConfig);

    // File Structure
    eleventyConfig.addPassthroughCopy('public');
    eleventyConfig.addPassthroughCopy({ 'assets/images': 'public/images-original' });
    eleventyConfig.addPassthroughCopy('notebooks/src');
    eleventyConfig.addWatchTarget('../public/**/*');
    eleventyConfig.addWatchTarget('../config/**/*');

    // Settings
    eleventyConfig.addGlobalData('buildversion', buildVersion);
    eleventyConfig.setUseGitIgnore(false);
    eleventyConfig.setDataDeepMerge(true);
    eleventyConfig.setLibrary('md', markdown);

    // Plugins
    eleventyConfig.addPlugin(syntaxHighlight, {});
    eleventyConfig.addPlugin(EleventyRenderPlugin);

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
    };
};
