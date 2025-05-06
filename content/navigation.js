const { route } = require('./_util');

module.exports = {
    headerNav: {
        links: [
            {
                href: route('tutorials'),
                label: {
                    en: 'Tutorials',
                },
            },
            {
                href: route('about'),
                label: {
                    en: 'About',
                },
                children: [
                    {
                        href: route('about'),
                        label: {
                            en: 'About STAC',
                            'lo-ip': 'Lorem',
                        },
                    },
                    {
                        href: route('about.stacSpec'),
                        label: {
                            en: 'STAC Spec',
                        },
                    },
                    {
                        href: route('about.toolsResources'),
                        label: {
                            en: 'Tools & Resources',
                        },
                    },
                    {
                        href: route('about.datasets'),
                        label: {
                            en: 'Datasets',
                        },
                    },
                ],
            },
            {
                href: route('getInvolved'),
                label: {
                    en: 'Get Involved',
                    'lo-ip': 'Loremvolved',
                },
                children: [
                    {
                        href: route('getInvolved'),
                        label: {
                            en: 'How to help',
                            'lo-ip': 'How to Lorem',
                        },
                    },
                    {
                        href: route('getInvolved.dataProviders'),
                        label: {
                            en: 'Data Providers',
                        },
                    },
                    {
                        href: route('getInvolved.developers'),
                        label: {
                            en: 'Developers',
                        },
                    },
                    {
                        href: route('getInvolved.dataUsers'),
                        label: {
                            en: 'Data Users',
                        },
                    },
                ],
            },
        ],
    },

    styleguideNav: {
        links: [
            {
                label: 'Colors',
                href: '/styleguide/colors',
            },
            {
                label: 'Type',
                href: '/styleguide/type',
            },
            {
                label: 'Elements',
                href: '/styleguide/elements',
            },
            {
                label: 'Components',
                href: '/styleguide/components',
            },
            {
                label: 'Sections',
                href: '/styleguide/sections',
            },
        ],
    },

    tutorialsNav: {
        heading: {
            en: 'STAC Tutorials'
        },
        homeLabel: {
            en: 'Getting Started'
        },
        categories: [
            {
                en: 'getting-started',
            },
            {
                en: 'python',
            },
            {
                en: 'qgis',
            },
            {
                en: 'r',
            },
            {
                en: 'cli',
            },
            {
                en: 'how-to-guides',
            },
        ],
    },

    footerNav: {
        main: {
            links: [
                {
                    href: route('about'),
                    label: {
                        en: 'About STAC'
                    }
                },
                {
                    href: route('getInvolved'),
                    label: {
                        en: 'Get Involved'
                    }
                },
                {
                    href: route('tutorials'),
                    label: {
                        en: 'Tutorials'
                    }
                }
            ],
        },
        column1: {
            content: {
                en: `### Explore`
            },
            links: [
                {
                    href: route('getInvolved'),
                    label: {
                        en: 'How to Help'
                    }
                },
                {
                    href: route('getInvolved.dataProviders'),
                    label: {
                        en: 'Data Providers'
                    }
                },
                {
                    href: route('getInvolved.developers'),
                    label: {
                        en: 'Developers'
                    }
                },
                {
                    href: route('getInvolved.dataUsers'),
                    label: {
                        en: 'Data Users'
                    }
                },
                {
                    href: route('about.stacSpec'),
                    label: {
                        en: 'STAC Spec'
                    }
                },
            ],
        },
        column2: {
            content: {
                en: `### Resources`
            },
            links: [
                {
                    href: route('tutorials'),
                    label: {
                        en: 'Tutorials'
                    },
                },
                {
                    href: {
                        en: 'https://cng.discourse.group/c/stac/15'
                    },
                    label: {
                        en: 'Discourse'
                    }
                },
                {
                    href: route('about.toolsResources'),
                    label: {
                        en: 'Tools & Resources'
                    }
                },
                {
                    href: route('about.datasets'),
                    label: {
                        en: 'Datasets'
                    }
                },
                {
                    href: {
                        en: 'https://stacindex.org/'
                    },
                    label: {
                        en: 'STAC Index'
                    },
                },
                {
                    href: route('about.faq'),
                    label: {
                        en: 'FAQs'
                    }
                },
            ]
        },
        column3: {
            content: {
                en: 
`### STAC Community

The STAC ecosystem is driven by open source contributions and community support. If you would like to help STAC grow and evolve, start by joining us on the [CNG Discourse](https://cng.discourse.group/c/stac/15). We also accept pull requests on our many open source projects.`
            },
            links: [
                {
                    href: {
                        en: 'https://github.com/radiantearth/stac-site'
                    },
                    label: {
                        en: 'stac-site'
                    },
                },
                {
                    href: {
                        en: 'https://github.com/radiantearth/stac-spec'
                    },
                    label: {
                        en: 'stac-spec'
                    },
                },
                {
                    href: {
                        en: 'https://github.com/radiantearth/stac-api-spec'
                    },
                    label: {
                        en: 'stac-api-spec'
                    },
                },
                {
                    href: {
                        en: 'https://stac-extensions.github.io/'
                    },
                    label: {
                        en: 'stac-extensions'
                    }
                },
                {
                    href: {
                        en: 'https://github.com/stac-utils/stac-server'
                    },
                    label: {
                        en: 'stac-server'
                    },
                },
                {
                    href: {
                        en: 'https://github.com/radiantearth/stac-browser'
                    },
                    label: {
                        en: 'stac-browser'
                    },
                },
            ]
        },
        license: {
            en: `This work is licensed under a Creative Commons Attribution 4.0 International License.`
        }
    }
};
