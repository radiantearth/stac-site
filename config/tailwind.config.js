const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ['Sarabun', ...defaultTheme.fontFamily.sans],
                display: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            boxShadow: {
                button: '-1px 1px 2px 0 rgba(16, 47, 59, 0.18)',
                card: '-2px 2px 4px 0 rgba(16, 47, 59, 0.18)',
            },
        },
        borderRadius: {
            sm: '0.125rem',
            DEFAULT: '0.25rem',
            lg: '0.375rem',
            xl: '0.75rem',
            '2xl': '1.5rem',
            full: '50%',
        },
        colors: {
            black: '#102F3B',
            white: '#FAFDFF',
            gray: {
                light: '#CAD1D3',
                DEFAULT: '#6E8087',
                dark: '#455054',
            },
            blue: {
                50: '#FAFDFF',
                100: '#E4F6FB',
                200: '#C4E2EF',
                300: '#A1C4D3',
                400: '#7DA7B8',
                500: '#5A8A9C',
                600: '#376C81',
                700: '#285D72',
                800: '#1A4E63',
                900: '#102F3B',
                DEFAULT: '#376C81',
                light: '#C4E2EF',
                dark: '#1A4E63',
            },
            transparent: 'transparent',
            green: '#4EB4AE',
            info: {
                light: '#C6E5F1',
                DEFAULT: '#74C0DD',
            },
            success: {
                light: '#B1E7E4',
                DEFAULT: '#63CFC9',
            },
            warning: {
                light: '#FEEDC8',
                DEFAULT: '#FCD788',
            },
            danger: {
                light: '#FCCFCF',
                DEFAULT: '#F99F9F',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
