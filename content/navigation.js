const routes = require('./routes');

module.exports = {
    "links": [ 
        routes.tutorials,
        routes.about,
        routes.getInvolved,
        routes.styleguide
    ],
    "styleguide_links": [
        routes.styleguide.colors,
        routes.styleguide.type,
        routes.styleguide.elements,
        routes.styleguide.components,
        routes.styleguide.sections,
    ]
}