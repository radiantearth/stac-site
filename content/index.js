const routes = require('../eleventy/routes').tree()

module.exports = {
    root: {
        routes,
        homepage: require('./homepage'),
        about: require('./about'),
        getInvolved: require('./get-involved'),
        navigation: require('./navigation'),
        categories: require('./categories'),
    },
};
