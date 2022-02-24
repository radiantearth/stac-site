const routes = require('./routes');

const headerNav = {
    "links": [ 
        routes.tutorials,
        {
            ...routes.about,
            children: [
                {
                    href: routes.about.href,
                    name: {
                        en: "About STAC",
                        "lo-ip": "Lorem"
                    }
                },
                routes.about.stacSpec,
                routes.about.toolsResources,
            ]
        },
        {
            ...routes.getInvolved,
            children: [
                {
                    href: routes.getInvolved.href,
                    name: {
                        en: "How to help"
                    }
                },
                routes.getInvolved.dataProviders,
                routes.getInvolved.developers,
                routes.getInvolved.dataUsers,
            ]
        },
    ],
}

const styleguideNav = {
    "links": [
        routes.styleguide.colors,
        routes.styleguide.type,
        routes.styleguide.elements,
        routes.styleguide.components,
        routes.styleguide.sections,
    ],
}

const tutorialsNav = {
    "categories": [
        {
            en: 'getting-started'
        },
        {
            en: 'notebooks'
        },
        {
            en: 'example'
        }
    ]
}

module.exports = {
    headerNav,
    styleguideNav,
    tutorialsNav
}