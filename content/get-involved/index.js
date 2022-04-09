const hero = {
    preheading: {
        en: 'Get Involved',
    },
    heading: {
        en: 'How to Help with STAC',
    },
    body: {
        en: `Welcome! The STAC community prides itself on being welcoming and collaborative, and we are excited you clicked on this page to learn how you might help!

If you aren't sure where to begin, jump on our [Gitter chat](https://gitter.im/SpatioTemporal-Asset-Catalog/Lobby) and introduce yourself. We can help match with a good project given your skills and time availability.

We also encourage checking out the [stac-spec repo](https://github.com/radiantearth/stac-spec), where a lot of discussion and ideation takes place.`,
    },
    cta_text: {
        en: 'Join Gitter Community',
    },
    cta_url: {
        en: 'https://gitter.im/SpatioTemporal-Asset-Catalog/Lobby',
    }
};

const howToHelp = {
    heading: {
        en: 'How to help',
    },
    body: {
        en: `We list a number of general ideas below We are working on more resources to make it easier to plugin for data or software help – for now [saying hi on gitter](https://gitter.im/SpatioTemporal-Asset-Catalog/Lobby) is a great place to begin.`,
    },
};

const currentNeeds = {
    1: {
        body: {
            en: `
### Help with data

Perhaps the biggest way to help push forward STAC is by helping to translate more data into STAC compliant catalogs. There are a number of existing open data sets that we would like to make accessible as STAC, which need a volunteer who is tech savvy to use STAC tools or develop new ones.

If you are a data provider and are contemplating exposing data with STAC we'd love to talk to you. There are likely community members who can help if your data is going to be open. And we are happy to give advice on STAC best practices for proprietary. You can use STAC to help expose downsampled assets to attract customers, or as a format for your paying users or on your intranets.

One of the biggest goals right now is to bring in more diverse types of data. So those who have data that is different and are up for pioneering a new extension are highly appreciated. We want to ensure that the core spec is able to handle a wide variety of extensions representing lots of different data types before we settle in at 1.0, so we can ensure stability of the core.
`,
        },
    },
    2: {
        body: {
            en: `
### Help with Software Development

While there are already a handful of STAC implementations, our goal is to have tools in every language, and integrations in every major geospatial-aware software project. So if you are a software developer who would like to help just get in touch and we can find a project for you. It could be helping with an existing one or starting something new - it's up to you. We have opportunities with servers, javascript clients, command line tools, client libraries, testing tools and more. And we are happy for those who have existing projects that they want to bring into the STAC ecosystem.`,
        },
    },
    3: {
        body: {
            en: `
### Help with Web Design

There copious opportunities for web designers, as we have none in our community as of yet. Even if you are just starting out with web design, we welcome your contribution and can give you meaningful projects. There is helping with this website, but also cool projects customizing different STAC HTML implementations in STAC Browser, so they don't all look the same. Creativity is welcome!`,
        },
    },
    4: {
        body: {
            en: `
### Help with Outreach

As a community we know one of the most important things is to spread the word about our work. This could be presenting at conferences or meet-ups, writing blog posts or whitepapers, or helping refine the website. We welcome anything from minor fixes on the site to creating full tutorials or new forms of outreach. We are a very open community, and are happy to help you develop skills and experience that help you.`,
        },
    },
    5: {
        body: {
            en: `
### Help with the Specification

The biggest way to help with the specification is to create compliant catalogs or software and give us feedback from that experience. That experience should ground you in what is possible, and then help us build the spec with pull requests from there. But we also welcome those who like to make things easier to read - organizing and editing the spec.`,
        },
    },
};

const communityCalls = {
    body: {
        en: `
### Community calls and working sessions

We also do video calls where we discuss various issues and move the spec forward. We alternate between hour long calls where we aim to talk through the issues in front of us, and 3 hour long 'working sessions' where people find some dedicated time to work on STAC, with others on the video call at the same time for any questions or collaboration. `,
    },
};

module.exports = {
    hero,
    howToHelp,
    communityCalls,
    currentNeeds,
    developers: require('./developers'),
};
