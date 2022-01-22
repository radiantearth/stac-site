const path = require('path');
const fs = require('fs');

const Prism = require('prismjs');
const loadLanguages = require('prismjs/components/');

loadLanguages(['py', 'json']);

module.exports = function (eleventyConfig) {
    eleventyConfig.addPairedShortcode('highlight', function (code, language) {
        const html = Prism.highlight(code, Prism.languages[language], language);
        
        return html;
    });

    eleventyConfig.addPairedShortcode('markdown', function (value) {
        return markdown.render(value);
    });

    eleventyConfig.addPairedShortcode('section', function (value, opts = {}) {
        return `<section class="section ${ opts.mods ? opts.mods
            .map(mod => ' section--' + mod )
            .split(' ') : ''
        }">` + value + `</section>`;
    });
}