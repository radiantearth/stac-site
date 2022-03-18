const path = require('path');
const fs = require('fs');
const routes = require('../eleventy/routes');

function jsonSnippet(filename) {
    const filePath = path.join(__dirname, `./_snippets/${filename}`);
    const jsonObj = require(filePath);
    return JSON.stringify(jsonObj, null, 4);
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
    jsonSnippet,
    snippet,
    route
};
