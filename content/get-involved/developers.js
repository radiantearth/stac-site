const { route } = require('../_util');

const meta = {
    title: {
        en: 'STAC for Developers',
    },
    description: {
        en: 'STAC offers a simple and flexible format for developers to interact with SpatioTemporal data, and a community and ecosystem of open source tools and innovation.'
    }
}

const hero = {
    preheading: {
        en: 'STAC',
    },
    heading: {
        en: 'For developers',
    },
    body: {
        en: `STAC offers not only a simple and flexible format for developers to interact with SpatioTemporal data, but an excellent community and ecosystem of open source tools and innovation.`,
    },
};

const bullets = [
    {
        icon: {},
        heading: {
            en: 'Small, Flexible JSON Core',
        },
        content: {
            en: `[STAC's core JSON](${route('about.stacSpec', 'en')}) is the bare minimum needed to interact with any geospatial data collection. Additionally, STAC standardizes metadata fields, naming conventions, query language, and catalog structure. The core JSON is fully extensible, allowing developers to add attributes to better capture their use case or dataset.`,
        },
    },
    {
        icon: {},
        heading: {
            en: 'Tooling Ecosystem',
        },
        content: {
            en: `The STAC community has built [numerous tools](${route('about.toolsResources', 'en')}) to make it easier to browse, serve, validate, and visualize STAC data in your programming language of choice. Most of these tools are open source and offer a great opportunity to improve and build upon meaningful projects.`,
        },
    },
    {
        icon: {},
        heading: {
            en: `Resources to Learn and Explore`
        },
        content: {
            en: `There are plenty of [APIs and static catalogs](${route('about.datasets', 'en')}) available to the public to get started quickly with real spatiotemporal data. If you're looking for a place to start, check out the [STAC tutorial library](${route('tutorials', 'en')}) to learn the basics or explore a sample project.`,
        }
    }
]

const closingContent = {
    en: 
`## STAC Community
    
If you'd like to get involved with the STAC community, the [How to Help](http://localhost:8080/en/get-involved/) page is a good place to learn about our active needs. If you're not sure where to begin, say hi in the [STAC Gitter chat](https://gitter.im/SpatioTemporal-Asset-Catalog/Lobby), and you'll likely find someone who will be more than happy to point you in the right direction.`
}

module.exports = {
    meta,
    hero,
    bullets,
    closingContent,
};
