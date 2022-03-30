const { route, md } = require('./_util');

const hero = {
    preheading: {
        en: 'STAC',
        'lo-ip': 'Lorem',
    },
    heading: {
        en: 'SpatioTemporal Asset Catalogs',
        'lo-ip': 'Ipsum Dolor, Sit Amet',
    },
    body: {
        en: `The STAC specification is a common language to describe geospatial information, so it can more easily be worked with, indexed, and discovered.`,
        'lo-ip': 'You should care about STAC because Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, quo. Eos necessitatibus adipisci ad, doloremque.',
    },
    cta_url: route('tutorials'),
    cta_text: {
        en: 'Explore Tutorials',
        'lo-ip': 'Lorem Ipsum',
    },
};

const stacIsFor = {
    heading: {
        en: 'STAC was created for',
        'lo-ip': 'Lorem Ipsum Dolor, Sit Amet',
    },
    group1: {
        heading: {
            en: 'Data providers',
            'lo-ip': 'Lorem Ipsum',
        },
        body: {
            en: 'STAC is a standardized way to expose collections of spatial temporal data. If you are a provider of data about the earth needing to catalog your holdings, STAC is driving a uniform means for indexing assets.',
            'lo-ip':
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A possimus fugiat sed error, eveniet nihil liber.',
        },
        cta_url: route('getInvolved.dataProviders'),
        cta_text: {
            en: 'Learn More',
            'lo-ip': 'Learn More',
        },
    },
    group2: {
        heading: {
            en: 'Developers',
            'lo-ip': 'Lorem Ipsum',
        },
        body: {
            en: 'If you are building infrastructure to host, ingest, or manage collections of spatial data, STAC’s core JSON is the bare minimum needed to describe geospatial assets, and is extensible to customize to your domain.',
            'lo-ip': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A possimus fugiat sed error, eveniet nihil liber.',
        },
        cta_url: route('getInvolved.developers'),
        cta_text: {
            en: 'Learn More',
            'lo-ip': 'Learn More',
        },
    },
    group3: {
        heading: {
            en: 'Data users',
            'lo-ip': 'Lorem Ipsum',
        },
        body: {
            en: 'Users of spatial temporal data are often burdened with building unique pipelines for each different collection of data they consume. The STAC community has defined this specification to remove this complexity and spur common tooling.',
            'lo-ip': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A possimus fugiat sed error, eveniet nihil liber.',
        },
        cta_url: route('getInvolved.dataUsers'),
        cta_text: {
            en: 'Learn More',
            'lo-ip': 'Learn More',
        },
    },
};

const moreAboutStac = {
    heading: {
        en: 'What is STAC',
        'lo-ip':
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A possimus fugiat sed error, eveniet nihil liber.',
    },
    body: {
        en:
`At its core, the SpatioTemporal Asset Catalog (STAC) specification provides a common structure for describing and cataloging spatiotemporal assets. 

A *spatiotemporal asset* is any file that represents information about the earth captured in a certain space and time.`,
    },
    stacSpec: {
        intro: {
            en:
`### The STAC Specification

[The STAC Specification](${route('about.stacSpec', 'en')}) consists of 4 semi-independent specifications. Each can be used alone, but they work best in concert with one another.`,
        },
        spec: {
            en:
`[STAC Item](https://github.com/radiantearth/stac-spec/blob/master/item-spec/item-spec.md) is the core atomic unit, representing a single spatiotemporal asset as a GeoJSON feature plus datetime and links.

[STAC Catalog](https://github.com/radiantearth/stac-spec/blob/master/catalog-spec/catalog-spec.md) is a simple, flexible JSON file of links that provides a structure to organize and browse STAC Items. A series of best practices helps make recommendations for creating real world STAC Catalogs.

[STAC Collection](https://github.com/radiantearth/stac-spec/blob/master/collection-spec/collection-spec.md) is an extension of the STAC Catalog with additional information such as the extents, license, keywords, providers, etc that describe STAC Items that fall within the Collection.

[STAC API](https://github.com/radiantearth/stac-api-spec) provides a RESTful endpoint that enables search of STAC Items, specified in OpenAPI, following OGC"s WFS 3.`
        },
        cta_text: {
            en: 'More About the Specification'
        },
        cta_url: route('about.stacSpec'),
    },
    vision: {
        en: 
`### The Vision

The goal is for all providers of spatiotemporal assets (Imagery, SAR, Point Clouds, Data Cubes, Full Motion Video, etc) to expose their data as SpatioTemporal Asset Catalogs (STAC), so that new code doesn"t need to be written whenever a new data set or API is released.`
    },
    cta_text: {
        en: 'More About STAC',
        'lo-ip': 'Lorem Ipsum',
    },
    cta_url: route('about'),
};

const tutorials = {
    heading: {
        en: 'Browse STAC Tutorials',
        'lo-ip': 'Lorem Ipsum Dolor',
    },
    body: {
        'lo-ip': `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A possimus fugiat sed error, eveniet nihil liber.`,
        en: `Browse our library of tutorials and workshops about STAC and its ecosystem.`,
    },
    cta_url: route('tutorials'),
    cta_text: {
        en: 'Browse All Tutorials',
        'lo-ip': 'Lorem Ipsum',
    },
};

const datasets = {
    heading: {
        en: 'Explore STAC datasets',
        'lo-ip': 'Lorem Ipsum Dolor',
    },
    content_after: {
        en: 'The amount of STAC data being collected and hosted in STAC APIs and static catalogs grows everyday as data providers adopt STAC as the defacto specification for spatiotemporal data. As more datasets are created, our community adds them to [stacindex.org](https://stacindex.org/catalogs) to be discovered and explored.',
        'lo-ip': 'Lorem Ipsum Dolor',
    },
    cta_text: {
        en: 'Learn More'
    },
    cta_url: route('about.toolsResources'),
};

const tools = {
    heading: {
        en: 'Explore STAC tools & resources',
        'lo-ip': 'Lorem Ipsum Dolor',
    },
    content_after: {
        en: `The STAC ecosystem continues to evolve with its ever growing library of tools and resources. More are being listed all the time at [stacindex.org](https://stacindex.org/catalogs) to experiment with and use in your next STAC project.`,
        'lo-ip': 'Lorem Ipsum Dolor',
    },
    cta_text: {
        en: 'Learn More'
    },
    cta_url: route('about.toolsResources'),
};

const organizations = {
    heading: {
        en: 'STAC is supported by these incredible organizations',
        'lo-ip': 'Lorem Ipsum Dolor',
    },
};

const getInvolved = {
    heading: {
        en: 'Get Involved',
    },
    body: {
        en: `There are a variety of ways to get involved with STAC, from building software, creating new STAC Catalogs, working on the spec, or helping in outreach. We strive to be fully open, collaborative and welcoming community. Learn more on our \"Get Involved\" page.`,
    },
    cta_text: {
        en: 'Learn More',
    },
    cta_url: route('getInvolved'),
};

module.exports = {
    hero,
    stacIsFor,
    moreAboutStac,
    tutorials,
    organizations,
    datasets,
    tools,
    getInvolved,
};
