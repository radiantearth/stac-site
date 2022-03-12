const hero = {
    preheading: {
        en: 'STAC',
    },
    heading: {
        en: 'For developers',
    },
    body: {
        en: `
If you are building infrastructure to host, ingest, or manage collections of spatial data or image products, STAC’s core JSON is the bare minimum needed to interact with any geospatial data collection. Additionally, STAC standardizes metadata fields, naming conventions, query language, and catalog structure. It describes individual instances as items containing a link to the physical dataset. The core JSON is fully extensible, allowing developers to add attributes to better capture their use case or dataset. As a developer, there are two options to implement STAC; as a static STAC or the STAC API. A static STAC is incredibly easy to create, and it can easily be ingested by an ecosystem of tools that can generate the STAC API.

Both types of catalogs support building a catalog webpage of STAC compliant items. This webpage can be an interactive landing page for each piece of data, and is easily configured to be crawled by search engine. A STAC API allows for querying data in a standard language and returning a subset of the catalog. STAC eases development of serving or consuming spatial temporal data by instituting standards, making metadata predictable. It is built by developers for developers, so implementation is usually easy, and there is a growing ecosystem of tools and libraries to use.`,
    },
};

module.exports = {
    hero,
};
