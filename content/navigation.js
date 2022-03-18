const { route } = require('./_util');

module.exports = {
    headerNav: {
        links: [
            {
                href: route('tutorials'),
                label: {
                    en: 'Tutorials',
                }
            },
            {
                href: route('about'),
                label: {
                    en: 'About'
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
                            en: 'lorem'
                        }
                    },
                    {
                        href: route('about.toolsResources'),
                        label: {
                            en: 'lorem'
                        }
                    }
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
                    }
                ],
            },
        ],
    },

    styleguideNav: {
        links: [
            {
                name: 'Colors',
                href: '/styleguide/colors',
            },
            {
                name: 'Type',
                href: '/styleguide/type',
            },
            {
                name: 'Elements',
                href: '/styleguide/elements',
            },
            {
                name: 'Components',
                href: '/styleguide/components',
            },
            {
                name: 'Sections',
                href: '/styleguide/sections',
            },
        ],
    },

    tutorialsNav: {
        categories: [
            {
                en: 'getting-started',
            },
            {
                en: 'notebooks',
            },
            {
                en: 'example',
            },
        ],
    },
};
