const path = require('path');
const fs = require('fs');

const markdownIt = require("markdown-it");
const Prism = require('prismjs');
const loadLanguages = require('prismjs/components/');

loadLanguages(['py', 'json']);

module.exports = function (eleventyConfig) {
    eleventyConfig.addPairedShortcode('highlight', function (code, language) {
        const html = Prism.highlight(code, Prism.languages[language], language);
        
        return html;
    });

    eleventyConfig.addPairedShortcode('markdown', function (value) {
        markdownIt({ html: true }).use(require('markdown-it-div'));
        return markdown.render(value.replace());
    });

    eleventyConfig.addPairedShortcode('section', function (value, opts = {}) {
        return `<section class="section ${ opts.mods ? opts.mods
            .map(mod => ' section--' + mod )
            .split(' ') : ''
        }">` + value + `</section>`;
    });

    eleventyConfig.addShortcode('svg', function (filename) {
        const svgPath = path.join(__dirname, `../assets/svg/${filename}.svg`);
        const fileContents = fs.readFileSync(svgPath);

        return fileContents;
    });
}