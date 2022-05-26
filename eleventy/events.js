const events = require('events');
const emitter = new events.EventEmitter();

module.exports = {
    emitter,
    init: function (eleventyConfig) {
        // Hook into the "create filters" lifecycle stage
        // usage emitter.on('eleventy.createFilters')
        eleventyConfig.addFilter('event_filter', function () {
            emitter.emit('eleventy.createFilters', eleventyConfig);
            return null;
        });

        // Hook into the "create collections" lifecycle stage
        // Allows use of the collectionApi without creating new collection
        // usage emitter.on('eleventy.createCollections')
        eleventyConfig.addCollection(
            'event_collections',
            function (collectionApi) {
                emitter.emit(
                    'eleventy.createCollections',
                    eleventyConfig,
                    collectionApi
                );
                return [];
            }
        );
    },
};
