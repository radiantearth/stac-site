const Jimp = require('jimp');
const fs = require('fs');
const path = require('path');
const { sizes } = require('./images.config.js');
const inputDir = path.join(__dirname, '../src/images');
const outputDir = path.join(__dirname, '../public/images');

let files = [];

// Get all files in dir recursively
function getFilesRecursively (directory) {
  const filesInDirectory = fs.readdirSync(directory);
  for (const file of filesInDirectory) {
    const absolute = path.join(directory, file);
    if (fs.statSync(absolute).isDirectory()) {
        getFilesRecursively(absolute);
    } else {
        files.push(absolute);
    }
  }
};

// Get all files in src/images
getFilesRecursively(inputDir);

// Process and resize image to each size (xs-xxl)
files.forEach(filePath => {
    const filename = filePath.split('/').slice(-1)[0];

    sizes.forEach(size => {
        const newFilename = filename.split('.').join(`-${size.name}.`);

        Jimp.read(filePath)
            .then(image => {
                image.scaleToFit(size.w, size.h);
                image.quality(35);
                image.write(`${outputDir}/${newFilename}`);
            });
    });
})