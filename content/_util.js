const path = require('path');
const fs = require('fs');

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

module.exports = {
    jsonSnippet,
    snippet,
};
