module.exports = function (eleventyConfig) {
    eleventyConfig.addFilter('markdown', function (value) {
        let markdown = require('markdown-it')({
            html: true
        });
        return markdown.render(value);
    });

    eleventyConfig.addFilter('fromCourse', function(collection, course) {
        if (!course) return collection;
        
        let filtered = collection.filter(item => {
            return item.data.courses && item.data.courses.indexOf(course) !== -1;
        });

        return filtered;
    });

    eleventyConfig.addFilter('fromTag', function(collection, tag) {
        if (!tag) return collection;
        
        let filtered = collection.filter(item => {
            return item.data.tags && item.data.tags.indexOf(tag) !== -1;
        });

        return filtered;
    });
}