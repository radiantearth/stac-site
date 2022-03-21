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
            en: 'Introduction'
        },
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
