const { route } = require('../_util');

const meta = {
    title: {
        en: 'STAC for Data Users',
    },
    description: {
        en: 'Users of spatial temporal data are often burdened with building unique pipelines for each different collection of data they consume. The STAC community has defined this specification to remove this complexity and spur common tooling.'
    }
}

const hero = {
    preheading: {
        en: 'STAC',
    },
    heading: {
        en: `For Data Users`
    },
    body: {
        en: `Users of spatial temporal data are often burdened with building unique pipelines for each different collection of data they consume. The STAC community has defined this specification to remove this complexity and spur common tooling.`
    }
}

const bullets = [
    {
        icon: {},
        heading: {
            en: 'Public data',
        },
        content: {
            en: `If you're looking for [public data](${route('about.datasets', 'en')}) to conduct research or to interact with SpatioTemporal data for the first time, the STAC spec is a consistent format that is used by many of the biggest providers of remote sensing & spatiotemporal data.`,
        },
    },
];

const closingContent = {
    en: 
`## STAC Community
    
If you'd like to get involved with the STAC community, the [How to Help](https://stacspec.org/en/get-involved/) page is a good place to learn about our active needs and community meetings.`
}

module.exports = {
    meta,
    hero,
    bullets,
    closingContent,
};
