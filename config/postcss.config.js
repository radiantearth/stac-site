// postcss.config.js
module.exports = {
    plugins: {
        'postcss-import': {},
        tailwindcss: {
            config: './config/tailwind.config.js',
        },
        autoprefixer: {},
    },
};
