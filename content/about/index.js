const { snippet, jsonSnippet } = require('../_util');
const routes = require('../routes');

const hero = {
    preheading: {
        en: 'STAC',
        'lo-ip': 'Lorem',
    },
    heading: {
        en: 'More about STAC',
        'lo-ip': 'Ipsum Dolor',
    },
    body: {
        en: `
STAC is a standard and a community of collaborators working to enable increased access to information about our planet. The focus of STAC is to make it as easy as possible for data providers to expose their data to the world.

There are exabytes of spatial data in existence today, with the potential to greatly increase our understanding of the world and improve decisions. But most of it remains inaccessible, as it is in a myriad of different formats, with no common way to find relevant information about a place over time. As data migrates to the cloud, we have an opportunity to make it more accessible and interoperable.
        `,
        'lo-ip': 'Lorem ipsum dolor',
    },
    beforeCode: {
        en: `
## A familiar format

The STAC spec itself provides a lowest common denominator JSON format to wrap around any relevant data about the earth. The core GeoJSON object and related structures are designed for extension, so it can adapt to different domains.
        `,
    },
    code: {
        en: jsonSnippet('spec/item-simple.json'),
    },
    afterCode: {
        en: `The core JSON pages can be transformed into browsable, interactive HTML pages with tools like STAC Browser. When STAC is used in concert with emerging formats like Cloud Optimized GeoTIFF or TileDB arrays the result vastly lowers the barriers for anybody to find and use geospatial assets like satellite imagery`,
    },
};

const whyStac = {
    body: {
        en: `
## The need for STAC

The SpatioTemporal Asset Catalog (STAC) is an open specification that evolved from different organizations coming together to increase the interoperability of searching for satellite imagery. When a user wants to search for all the imagery in their area and time of interest they can’t make just one search — they have to use different tools and connect to API’s that are similar but all slightly different. STAC aims to make that much easier, by providing common metadata to expose geospatial assets.

The goal of STAC is to enable a global index of all imagery (satellite, aerial, drone, etc), derived data products and alternative geospatial captures (LiDAR, SAR, Full Motion Video, Hyperspectral and beyond). STAC focuses on an easily implementable standard for organizations to expose their data in a persistent and reliable way.

### Reducing technical barriers

Most geospatial catalogs require the provider of data to maintain servers and databases to enable search. This can be a large challenge with huge amounts of data. STAC aims to flip that paradigm on its head, following the path of the web, where putting up an HTML page is very simple, and then the search of those pages can be done by anyone, with experts in search emerging over time. STAC aims to enable that next generation of geospatial search engines, while also supporting web best practices so geospatial information is more easily surfaced in traditional search engines.

### Building community

More than a specification, STAC is a community of collaborators working towards a shared goal. We believe in interoperability, the power of information about the earth, and open data (where it is appropriate). If you'd like to help us in our quest to make spatiotemporal data more accessible don't hesitate to join the community. You can learn about all the ways you can on our How To Help page.

### Tools & resources

A range of tools help facilitate the use of the STAC spec – some of the most widely used are:

- [STAC Browser](https://github.com/radiantearth/stac-browser) is a Vue-based browser for STAC catalogs.
- [STAC Server](https://github.com/stac-utils/stac-server) (previously known as sat-api) is a STAC compliant web API for searching and serving metadata for geospatial data. It is written in Javascript and backed by Elasticsearch
- [STAC Validator](https://github.com/sparkgeo/stac-validator) is a python utility to validate STAC json files against the STAC spec or against local STAC extensions.
- [PySTAC](https://github.com/stac-utils/pystac) is a library for working with STAC catalogs in Python
- [EODAG](https://github.com/CS-SI/eodag) is a CLI tool and a Python framework for searching, aggregating results and downloading EO data through a unified API regardless of the data provider. It can be run as STAC client or STAC API proxy server for non-STAC providers.

[See the full list](${routes.about.toolsResources.href.en}){.cta .cta--understated}
`,
    },
};

const whoIsItFor = {
    body: {
        en: `
## Who is STAC for

### Data Providers

STAC is a standardized way to expose collections of spatial temporal data. If you are a provider of imagery or other spatial information and are in need of data catalogs, STAC is driving a uniform means for indexing assets. It can be used for external access to your holdings, exposing your information to search engines and to a growing ecosystem of tools. Large providers can also use a 'static catalog' for reliable backups in case the database or Elasticsearch powering their main index goes down.

[Learn More](${routes.getInvolved.dataProviders.href.en}){.cta-understated}

### Developers

If you are building infrastructure to host, ingest, or manage collections of spatial data or image products, STAC’s core JSON is the bare minimum needed to interact with any geospatial data collection. Additionally, STAC standardizes metadata fields, naming conventions, query language, and catalog structure. It describes individual instances as items containing a link to the physical dataset. The core JSON is fully extensible, allowing developers to add attributes to better capture their use case or dataset. As a developer, there are two options to implement STAC; as a static STAC or the STAC API. A static STAC is incredibly easy to create, and it can easily be ingested by an ecosystem of tools that can generate the STAC API.

[Learn More](${routes.getInvolved.developers.href.en}){.cta-understated}

### Data Users

Consumers of spatial temporal datasets are often burdened with building unique pipelines for ingesting collections into their system. Collections are delivered with varying levels of detail in their metadata and via distinct delivery mechanisms. In an effort to reduce this burden, a community of geospatial developers have constructed the STAC spec to remove the need for tailor-made workflows.

[Learn More](${routes.getInvolved.dataUsers.href.en}){.cta-understated}`,
    },
};

module.exports = {
    hero,
    whyStac,
    whoIsItFor,
    stacSpec: require('./stac-spec'),
    toolsResources: require('./tools-resources'),
};
