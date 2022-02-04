const i18n = require('eleventy-plugin-i18n');
const i18njs = require('eleventy-plugin-i18n/i18n.js');
const translations = require('../content');
const markdown = require('./markdown');

module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget("../content/**/*");
    eleventyConfig.addGlobalData('tt', translations.root);

    const pluginOptions = {
        translations,
        fallbackLocales: {
            '*': 'en',
        }
    };
    
    eleventyConfig.addPlugin(i18n, pluginOptions);

    eleventyConfig.addFilter('whereat', function (val) {
        const page = this.page || this.ctx.page;

        console.log(this);

        return val;
    })

    eleventyConfig.addFilter('localize', function (key, data, localeOverride) {
        key = key.indexOf('.') === 0 && this.ctx.content_path ? this.ctx.content_path + key : key;
        key = key.indexOf('root.') === 0 ? key : `root.${key}`;
        let content = this.env.filters.i18n.bind(this)(key, data, localeOverride);

        return content;
    });
}