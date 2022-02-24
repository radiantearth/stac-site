module.exports = function (eleventyConfig) {
    eleventyConfig.addFilter('tutorialLocaleFromSlug', getTutorialLocaleFromSlug);

    eleventyConfig.addFilter('tutorialIdFromPath', getTutorialIdFromPath);

    eleventyConfig.addFilter('getLocalizedTutorial', function (collection, locale, id) {
        const tutorialId = id ? id : getTutorialIdFromPath(this.ctx.page.filePathStem);
        
        if (!tutorialId) return `/${locale}/tutorials`;

        const tutorial = collection.find(tutorial => {
            return tutorial.data.tutorialId === tutorialId && tutorial.data.locale === locale;
        });
        
        if (tutorial) {
            return tutorial.data.page.url;
        } else {
            return `/${locale}/tutorials`;
        }
    });
}

function getTutorialLocaleFromSlug (slug) {
    const slugParts = slug.split('.');
    return slugParts.length > 1 ? slugParts.slice(-1)[0] : 'en';
}

function getTutorialIdFromPath (filepath) {
    return filepath.split('/').slice(-2)[0];
}