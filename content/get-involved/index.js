const meta = {
    title: {
        en: 'How to Help with STAC',
    },
    description: {
        en: 'The STAC community prides itself on being welcoming and collaborative. Learn how about our ongoing needs and how you can contribute!'
    }
}

const hero = {
    heading: {
        en: 'Get Involved',
    },
    body: {
        en: `Welcome! The STAC community prides itself on being welcoming and collaborative, and we are excited you clicked on this page to learn how you might help!

If you aren't sure where to begin, join the [STAC Community Google Group](https://groups.google.com/a/cloudnativegeo.org/g/stac-community).
This will get you invites to the community meetings (see below).

We also invite you to join the [CNG Slack](https://join.slack.com/t/cloudnativegeo/shared_invite/zt-2i37pc3nm-9bXiRHYrI6fH5qFh2VaLFA), there's a #stac channel where you can ask questions and get help from the community.

Lastly, for bigger discussions and more in-depth technical conversations, we have a [discussion forum on GitHub](https://github.com/radiantearth/stac-spec/discussions). There are also the the [stac-spec](https://github.com/radiantearth/stac-spec), [stac-api-spec](https://github.com/radiantearth/stac-api-spec), and the [stac-utils](https://github.com/stac-utils) GitHub repositories where you can write issues, feature requests, propose changes, or contribute to the specification and tools.`
    },
    cta_text: {
        en: 'Join the STAC Google Group',
    },
    cta_url: {
        en: 'https://groups.google.com/a/cloudnativegeo.org/g/stac-community',
    },
};

const communityCalls = {
    body: {
        en: `
### Community meetings

We also do video calls where we discuss various issues and move the spec forward. The meeting is an hour long and informal. It is a space to discuss ongoing work, ask questions about implementations, and plan future work and sprints. We try to make sure there is always a member of the STAC PSC at these meetings.

We currently host two weetings at different times to accommodate different time zones:

- Every other Monday at 11 am EST ([time zone converter](https://www.timeanddate.com/worldclock/converter.html?iso=20251117T160000&p1=224&p2=179&p3=136&p4=37&p5=107&p6=176&p7=33&p8=248&p9=240))
- Every first Friday of a month at 13:30 AEST ([time zone converter](https://www.timeanddate.com/worldclock/converter.html?iso=20251205T023000&p1=176&p2=33&p3=248&p4=240&p5=224&p6=179&p7=136&p8=37&p9=107))

Join the [STAC Community Google Group](https://groups.google.com/a/cloudnativegeo.org/g/stac-community) to get your invite.
`
    },
};

const howToHelp = {
    heading: {
        en: 'How to help with STAC',
    }
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

There are copious opportunities for web designers, as we have none in our community as of yet. Even if you are just starting out with web design, we welcome your contribution and can give you meaningful projects. There is helping with this website, but also cool projects customizing different STAC HTML implementations in STAC Browser, so they don't all look the same. Creativity is welcome!`,
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

module.exports = {
    meta,
    hero,
    communityCalls,
    howToHelp,
    currentNeeds,
    developers: require('./developers'),
    dataUsers: require('./data-users'),
    dataProviders: require('./data-providers'),
};
