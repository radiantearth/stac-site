const path = require('path');
const fs = require('fs');
const routes = require('../eleventy/routes');
const markdown = require('../eleventy/markdown');

function codeSnippet(filename, lang) {
    const filePath = path.join(__dirname, `./_snippets/${filename}`);
    
    if (lang && lang === 'json') {
        const jsonObj = require(filePath);
        return '```json\n' + JSON.stringify(jsonObj, null, 4) + '\n```';
    } else {
        return '```\n' + require(filePath) + '\n```';
    }
}

function snippet(filename) {
    const filePath = path.join(__dirname, `./_snippets/${filename}`);
    const fileContents = fs.readFileSync(filePath);
    return fileContents;
}

function route(name, locale) {
    return routes.find(name, locale);
}

module.exports = {
    md: markdown.render,
    codeSnippet,
    snippet,
    route,
};
