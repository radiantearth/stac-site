const path = require('path');
const fs = require('fs');

const markdown = require("./markdown");
const Prism = require('prismjs');
const loadLanguages = require('prismjs/components/');

loadLanguages(['py', 'json']);

module.exports = function (eleventyConfig) {
    eleventyConfig.addFilter('markdown', function (value) {
        return markdown.render(value);
    });

    eleventyConfig.addFilter('fromCourse', function(collection, course) {
        if (!collection) return [];
        if (!course) return collection;
        
        let filtered = collection.filter(item => {
            return item.data.courses && item.data.courses.indexOf(course) !== -1;
        });

        return filtered;
    });

    eleventyConfig.addFilter('fromTag', function(collection, tag) {
        if (!collection) return [];
        if (!tag) return collection;
        
        let filtered = collection.filter(item => {
            return item.data.tags && item.data.tags.indexOf(tag) !== -1;
        });

        return filtered;
    });

    eleventyConfig.addFilter('whereLang', function(collection, locale) {
        if (!collection) return [];
        if (!locale) return collection;

        let filtered = collection.filter(item => {
            return item.data.locale === locale;
        });

        return filtered;
    })

    eleventyConfig.addFilter('svg', function (filename) {
        const svgPath = path.join(__dirname, `../assets/svg/${filename.replace('.svg', '')}.svg`);    
        const fileContents = fs.readFileSync(svgPath);

        return this.env.filters.safe(fileContents.toString('utf8'));
    });

    eleventyConfig.addFilter('notebook', function (filename) {
        const sanitizedFilename = filename.replace('.ipynb', '').trim() + '.ipynb';
        const notebookPath = path.join(__dirname, `../assets/notebooks/${sanitizedFilename}`);
        const publicPath = `/assets/notebooks/${sanitizedFilename}`;
        
        const fileContents = fs.readFileSync(notebookPath);
        const notebook = JSON.parse(fileContents.toString('utf8'));

        let output = notebook.cells.reduce((prevCell, currentCell) => {
            if (currentCell.cell_type === 'markdown') {
                let cellMd = currentCell.source.reduce((prev, current) => prev + markdown.render(current), '')
                return prevCell + cellMd;
            } else if (currentCell.cell_type === 'code') {
                let cellCode = currentCell.source.reduce((prev, current) => {
                    return prev + Prism.highlight(this.env.filters.safe(current), Prism.languages.py, 'py'); 
                }, '')
                
                return `${prevCell}<pre class="card-black">${cellCode}</pre>`
            }
        }, '');

        let downloadLink = (
            `<a href="${publicPath}" target="download" class="">download</a>`
        );

        let template = (
            `<div class="bg-blue-100">
                <div class="p-2">
                    <span class="mb-4 mr-3 font-bold inline-block text-blue-600 py-1 px-2">${sanitizedFilename}</span>
                    ${downloadLink}
                </div>
                <div class="px-5 pb-5">
                    ${output}
                </div>
            </div>`
        );

        return this.env.filters.safe(template);
    });

    eleventyConfig.addFilter('langRoute', function (url, lang) {
        return url.replace(/^\/[a-z\-]*\//, `/${lang}/`);
    })
}