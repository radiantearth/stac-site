module.exports = function (eleventyConfig) {
    eleventyConfig.addFilter('categoryTreeFromPath', function (filePathStem) {
        return categoryTreeFromPath(filePathStem, this.ctx);
    });

    eleventyConfig.addFilter('categorySlugFromPath', function (filePathStem) {
        return categorySlugFromPath(filePathStem, this.ctx);
    });

    eleventyConfig.addFilter('categoryNameFromPath', function (filePathStem) {
        return categoryNameFromPath(filePathStem, this.ctx);
    });

    eleventyConfig.addFilter(
        'fromCategorySlug',
        function (collection, category) {
            if (!collection) return [];

            // if (!locale) return collection;

            let filtered = collection.filter((item) => {
                return item.data.categorySlug === category;
            });

            return filtered;
        }
    );

    eleventyConfig.addFilter(
        'fromCategoryTree',
        function (collection, category, locale) {
            if (!collection) return [];

            let filteredByCategory = collection.filter((item) => {
                return (
                    item.data.categoryTree &&
                    item.data.categoryTree.split('/').indexOf(category) !== -1
                );
            });

            if (!locale) return filteredByCategory;

            let filteredByLocale = filteredByCategory.filter(
                (item) => item.data.locale === locale
            );

            return filteredByLocale;
        }
    );

    eleventyConfig.addFilter(
        'fromCategoryTreeExact',
        function (collection, category) {
            if (!collection) return [];

            // if (!locale) return collection;

            let filtered = collection.filter((item) => {
                return item.data.categoryTree === category;
            });

            return filtered;
        }
    );

    eleventyConfig.addFilter('findBySlug', function (collection, slug) {
        return collection.find((item) => item.categorySlug === slug);
    });

    eleventyConfig.addCollection('category', function (collectionApi) {
        const tutorials = collectionApi.getFilteredByTag('tutorial');

        const categories = {};

        tutorials.forEach((tutorial) => {
            if (categories[tutorial.data.categoryTree]) return;

            categories[tutorial.data.categoryTree] = {
                categorySlug: tutorial.data.categorySlug,
                categoryTree: tutorial.data.categoryTree,
                categoryName: tutorial.data.categoryName,
            };
        });

        return Object.values(categories);
    });
};

function categoryTreeFromPath(filePathStem, ctx) {
    const treeAndId = filePathStem
        .replace(/\/*tutorials/, '')
        .replace(ctx.page.fileSlug, '')
        .replace(/\/+$/, '')
        .replace(/^\/+/, '')
        .split('/');

    const tree = treeAndId.slice(0, treeAndId.length - 1).join('/');

    return tree;
}

function categorySlugFromPath(filePathStem, ctx) {
    const categoryTree = categoryTreeFromPath(filePathStem, ctx);

    if (!categoryTree || categoryTree.length < 1) return null;

    const slugs = categoryTree.split('/');
    const slug = slugs[slugs.length - 1];

    return slug;
}

function categoryNameFromPath(filePathStem, ctx) {
    const categorySlug = categorySlugFromPath(filePathStem, ctx);

    if (!categorySlug) return 'Uncategorized';

    const category = categorySlug
        .split('-')
        .map((cat) => cat.slice(0, 1).toUpperCase() + cat.slice(1, cat.length))
        .join(' ');

    return category;
}
