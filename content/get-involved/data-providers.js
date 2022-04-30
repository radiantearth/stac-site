const { route } = require('../_util');

const meta = {
    title: {
        en: 'STAC for Data Providers',
    },
    description: {
        en: 'STAC is a standardized way to expose collections of spatial temporal data. If you are a provider of data about the earth needing to catalog your holdings, STAC is driving a uniform means for indexing assets.'
    }
}

const hero = {
    preheading: {
        en: 'STAC',
    },
    heading: {
        en: `For Data Providers`
    },
    body: {
        en: `STAC is a standardized way to expose collections of spatial temporal data. If you are a provider of data about the earth needing to catalog your holdings, STAC is driving a uniform means for indexing assets.`
    }
}

const bullets = [
    {
        icon: {},
        heading: {
            en: 'Easy to host',
        },
        content: {
            en: `Because STAC APIs can be hosted without complex servers or infrastructure, hosting your data can be as simple as dropping your static files into an a public folder on AWS or a service of your choice. Making your content searchable and secure is easier too, with [numerous server side tools](${route('about.toolsResources', 'en')}) out there to streamline the process and get your data online and accessible.`,
        },
    },
];

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