module.exports = function (eleventyConfig) {
    eleventyConfig.addFilter('tutorialLocaleFromSlug', function (slug) {
        const slugParts = slug.split('.');
        return slugParts.length > 1 ? slugParts.slice(-1)[0] : 'en';
    });

    eleventyConfig.addFilter('tutorialIdFromPath', function (filepath) {
        return filepath.split('/').slice(-2)[0];
    });
}