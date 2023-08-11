const { route, md } = require('./_util');

const meta = {
    title: {
        en: 'STAC: SpatioTemporal Asset Catalogs',
    },
    description: {
        en: 'The STAC specification is a common language to describe geospatial information, so it can more easily be worked with, indexed, and discovered.'
    }
}

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
        en: `The STAC specification is a **common language to describe geospatial information**, so it can more easily be worked with, indexed, and discovered.`,
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
            en: 'STAC for Data Providers',
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
            en: 'STAC for Developers',
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
            en: 'STAC for Data Users',
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

[STAC API](https://github.com/radiantearth/stac-api-spec) provides a RESTful endpoint that enables search of STAC Items, specified in OpenAPI, following OGC's WFS 3.`
        },
        cta_text: {
            en: 'More About the Specification'
        },
        cta_url: route('about.stacSpec'),
    },
    vision: {
        en: 
`### The Vision

The goal is for all providers of spatiotemporal assets (Imagery, SAR, Point Clouds, Data Cubes, Full Motion Video, etc) to expose their data as SpatioTemporal Asset Catalogs (STAC), so that new code doesn't need to be written whenever a new data set or API is released.`
    },
    cta_text: {
        en: 'More About STAC',
        'lo-ip': 'Lorem Ipsum',
    },
    cta_url: route('about'),
};

const tutorials = {
    heading: {
        en: 'Browse the STAC Tutorial Library',
        'lo-ip': 'Lorem Ipsum Dolor',
    },
    body: {
        en: `Want to learn to interact with STAC data in a project, spin up a STAC API, or make the data you manage more accessible? Browse our library of tutorials and workshops about STAC and its ecosystem.`,
        'lo-ip': `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A possimus fugiat sed error, eveniet nihil liber.`,
    },
    cta_url: route('tutorials'),
    cta_text: {
        en: 'Browse Tutorials',
        'lo-ip': 'Lorem Ipsum',
    },
    feed1: {
        en:
`###  Getting Started with STAC

Learn about the specification, the options available for applying STAC in a practical way, and the community and resources to help you along the way.`
    },
    feed2: {
        en:
`###  STAC & Python

Learn the basics of using PySTAC to read, write, and manipulate STAC through these hands-on Jupyter Notebooks.`
    },
    feed3: {
        en: 
`### STAC & QGIS

Learn the basics of using the STAC API Browser QGIS Plugin.`
    },
    feed4: {
        en: 
`### STAC How-to Guides

Answer specific STAC questions using these STAC How-to Guide Jupyter Notebooks.`
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
        en: 'Browse Datasets'
    },
    cta_url: route('about.datasets'),
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
        en: 'Browse Tools & Resources'
    },
    cta_url: route('about.toolsResources'),
};

const organizations = (function () {
    const w64 = "md:w-64 m-3";
    const w48 = "md:w-48 m-3";
    const w32 = "md:w-32 m-3";

    return {
        heading: {
            en: 'STAC is supported by these incredible organizations',
            'lo-ip': 'Lorem Ipsum Dolor',
        },
        content: [ // list of rows
            [ // list of columns
                {
                    "class": w64,
                    "site": "https://www.planet.com/",
                    "image": "planet.png",
                    "alt": "Planet logo",
                },
                {
                    "class": w64,
                    "site": "https://www.radiant.earth/",
                    "image": "radiant-earth.png",
                    "alt": "radiant earth logo",
                },
                {
                    "class": w64,
                    "site": "https://www.microsoft.com/",
                    "image": "microsoft.png",
                    "alt": "Microsoft logo",
                },
                {
                    "class": w48,
                    "site": "https://www.element84.com/",
                    "image": "element84.png",
                    "alt": "element84 logo",
                },
            ],

            [
                {
                    "class": w48,
                    "site": "https://sparkgeo.com/",
                    "image": "sparkgeo.png",
                    "alt": "sparkgeo logo",
                },
                {
                    "class": w48,
                    "site": "https://www.maxar.com/",
                    "image": "maxar-technologies.png",
                    "alt": "maxar technologies logo",
                },
                {
                    "class": w48,
                    "site": "https://arturo.ai/",
                    "image": "arturo.jpeg",
                    "alt": "Arturo logo",
                },
                {
                    "class": w48,
                    "site": "https://www.usgs.gov/",
                    "image": "usgs.png",
                    "alt": "usgs logo",
                },
                {
                    "class": w48,
                    "site": "https://www.cosmiqworks.org/",
                    "image": "cosmiqworks.png",
                    "alt": "cosmiqworks logo",
                },
            ],

            [
                {
                    "class": "md:w-32 m-3 p-2 md:p-4",
                    "site": "https://aws.amazon.com/",
                    "image": "aws.png",
                    "alt": "aws logo",
                },
                {
                    "class": w32,
                    "site": "https://www.digitalearthafrica.org/",
                    "image": "digital-earth-africa.png",
                    "alt": "digital earth africa logo",
                },
                {
                    "class": w32,
                    "site": "https://www.worldbank.org/",
                    "image": "world-bank-group.png",
                    "alt": "world bank group logo",
                },
                {
                    "class": w32,
                    "site": "https://www.azavea.com/",
                    "image": "azavea.png",
                    "alt": "azavea logo",
                },
                {
                    "class": w32,
                    "site": "https://www.nasa.gov/",
                    "image": "nasa.png",
                    "alt": "NASA logo",
                },
            ],

            [
                {
                    "class": w32,
                    "site": "https://umbra.space/",
                    "image": "umbra.png",
                    "alt": "Umbra logo",
                },
                {
                    "class": w32,
                    "site": "https://openeo.org/",
                    "image": "open-eo.png",
                    "alt": "Open EO logo",
                },
                {
                    "class": w32,
                    "site": "", // what is this company? could find their site
                    "image": "pixel8.svg",
                    "alt": "Pixel 8 logo",
                },
                {
                    "class": w32,
                    "site": "https://en.wikipedia.org/wiki/China%E2%80%93Brazil_Earth_Resources_Satellite_program", // didn't find a better site
                    "image": "cbers.jpeg",
                    "alt": "CBERS: China Brazil Earth Research Satellite logo",
                },
                {
                    "class": w32,
                    "site": "https://astraea.earth/",
                    "image": "astraea.webp",
                    "alt": "Astraea logo",
                },
            ],

            [
                {
                    "class": w32,
                    "site": "https://nearspacelabs.com/",
                    "image": "near-space-lab.png",
                    "alt": "Near Space Labs logo",
                },
                {
                    "class": w32,
                    "site": "https://climate.com/",
                    "image": "the-climate-corporation.svg",
                    "alt": "The Climate Corporation logo",
                },
                {
                    "class": w32,
                    "site": "https://www.linkedin.com/company/vulcantech-gmbh/",
                    "image": "vulcan-technology.png",
                    "alt": "Vulcan Technology logo",
                },
                {
                    "class": w32,
                    "site": "https://www.l3harris.com/",
                    "image": "l3-harris.svg",
                    "alt": "L3 Harris logo",
                },
                {
                    "class": w32,
                    "site": "https://earthengine.google.com/",
                    "image": "google-earth-engine.png",
                    "alt": "Google Earth Engine",
                },
                {
                    "class": w32,
                    "site": "https://up42.com",
                    "image": "up42.png",
                    "alt": "UP42",
                },
            ],
        ],
    }
})();

const getInvolved = {
    heading: {
        en: 'Get Involved',
    },
    body: {
        en: `There are a variety of ways to get involved with STAC, from building software, creating new STAC Catalogs, working on the spec, or helping in outreach. We strive to be fully open, collaborative and welcoming community. Learn more on our \"Get Involved\" page.`,
    },
    cta_text: {
        en: 'Learn How to Help',
    },
    cta_url: route('getInvolved'),
};

module.exports = {
    meta,
    hero,
    stacIsFor,
    moreAboutStac,
    tutorials,
    organizations,
    datasets,
    tools,
    getInvolved,
};
