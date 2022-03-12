const path = require('path');
const fs = require('fs');

const Image = require('@11ty/eleventy-img');
const Prism = require('prismjs');
const loadLanguages = require('prismjs/components/');

loadLanguages(['py', 'json']);

async function generateImage(src, alt, sizes) {
    let metadata = await Image(src, {
        widths: [300, 600, 1100, 1600],
        formats: ['avif', 'jpeg', 'png'],
        outputDir: './public/images/',
        urlPath: '/public/images/',
    });

    let imageAttributes = {
        alt,
        sizes,
        loading: 'lazy',
        decoding: 'async',
    };

    // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
    return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function (eleventyConfig) {
    eleventyConfig.addPairedShortcode('highlight', function (code, language) {
        const html = Prism.highlight(code, Prism.languages[language], language);

        return html;
    });

    eleventyConfig.addPairedShortcode('markdown', function (value) {
        return markdown.render(value);
    });

    eleventyConfig.addPairedShortcode('section', function (value, opts = {}) {
        return (
            `<section class="section ${
                opts.mods
                    ? opts.mods.map((mod) => ' section--' + mod).split(' ')
                    : ''
            }">` +
            value +
            `</section>`
        );
    });

    eleventyConfig.addNunjucksAsyncShortcode('image', generateImage);
};
