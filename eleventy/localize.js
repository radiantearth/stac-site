const i18n = require('eleventy-plugin-i18n');
const translations = require('../content');

module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget('../content/**/*');
    eleventyConfig.addGlobalData('tt', translations.root);

    const pluginOptions = {
        translations,
        fallbackLocales: {
            '*': 'en',
        },
    };

    eleventyConfig.addPlugin(i18n, pluginOptions);

    eleventyConfig.addFilter('localize', function (key, data, localeOverride) {
        key = key.indexOf('.') === 0 && this.ctx.name ? this.ctx.name + key : key;
        key = key.indexOf('root.') === 0 ? key : `root.${key}`;
        let content = this.env.filters.i18n.bind(this)(
            key,
            data,
            localeOverride
        );

        return content;
    });
};
