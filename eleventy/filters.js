const path = require('path');
const fs = require('fs');
const markdown = require('./markdown.js');

module.exports = function (eleventyConfig) {
    eleventyConfig.addFilter('markdown', function (value) {
        return markdown.render(value);
    });

    eleventyConfig.addFilter('fromCourse', function (collection, course) {
        if (!collection) return [];
        if (!course) return collection;

        let filtered = collection.filter((item) => {
            return (
                item.data.courses && item.data.courses.indexOf(course) !== -1
            );
        });

        return filtered;
    });

    eleventyConfig.addFilter('fromTag', function (collection, tag) {
        if (!collection) return [];
        if (!tag) return collection;

        let filtered = collection.filter((item) => {
            return item.data.tags && item.data.tags.indexOf(tag) !== -1;
        });

        return filtered;
    });

    eleventyConfig.addFilter('whereLang', function (collection, locale) {
        if (!collection) return [];
        if (!locale) return collection;

        let filtered = collection.filter((item) => {
            return item.data.locale === locale;
        });

        return filtered;
    });

    eleventyConfig.addFilter('svg', function (filename) {
        const svgPath = path.join(
            __dirname,
            `../assets/svg/${filename.replace('.svg', '')}.svg`
        );
        const fileContents = fs.readFileSync(svgPath);

        return this.env.filters.safe(fileContents.toString('utf8'));
    });

    eleventyConfig.addFilter('notebook', function (filename) {
        const sanitizedFilename = filename
            .replace(/(\.ipynb|\.html)/, '')
            .trim();
        const notebookPath = path.join(
            __dirname,
            `../notebooks/build/${sanitizedFilename}.html`
        );
        const branch = 'redesign-feb22'
        const publicPath = `/notebooks/src/${sanitizedFilename}.ipynb`;
        const colabUrl = `https://colab.research.google.com/github/radiantearth/stac-site/blob/${branch}/notebooks/src/${sanitizedFilename}.ipynb`;
        const binderUrl = `https://mybinder.org/v2/gh/radiantearth/stac-site/${branch}?filepath=notebooks/src/${sanitizedFilename}.ipynb`;

        const notebookHtml = fs.readFileSync(notebookPath, 'utf8');

        let downloadLink = `<a href="${publicPath}" target="download" class="">Download</a>`;

        let colabLink = `<a href="${colabUrl}">Open in Colab</a>`;
        let binderLink = `<a href="${binderUrl}">Launch Binder</a>`;

        let template = `<div class="jupyter-notebook">
            <div class="jupyter-notebook__meta py-4">
                <span class="my-1 mr-5 font-bold inline-block text-blue-600 py-1">${sanitizedFilename}.ipynb</span>
                <div class="whitespace-nowrap inline-block">
                    <span class="mr-3 my-1 inline-block">${downloadLink}</span> |
                    <span class="mx-3 my-1 inline-block">${colabLink}</span> |
                    <span class="mx-3 my-1 inline-block">${binderLink}</span>
                </div>
            </div>
            ${notebookHtml}
        </div>`;

        return this.env.filters.safe(template);
    });

    eleventyConfig.addFilter('langRoute', function (url, lang) {
        return url.replace(/^\/[a-z\-]*\//, `/${lang}/`);
    });

    eleventyConfig.addFilter('noExt', function (slug) {
        return slug.split('.')[0];
    });

    eleventyConfig.addFilter(
        'stacIndexCategory',
        function (collection, category) {
            if (!collection) return [];
            if (!category) return collection;

            let filtered = collection.filter((item) => {
                return (
                    item.categories && item.categories.indexOf(category) !== -1
                );
            });

            return filtered;
        }
    );

    eleventyConfig.addFilter('isApi', function (collection, yesno = true) {
        return !collection ? [] : collection.filter(item => item.isApi === yesno);
    });

    eleventyConfig.addFilter('access', function (collection, access = 'public') {
        return !collection ? [] : collection.filter(item => item.access === access);
    });

    eleventyConfig.addFilter('replace', function (str, fragment, newFragment) {
        return str.replace(fragment, newFragment);
    });
};
