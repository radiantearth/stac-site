const filePaths = require('fast-glob').sync([
    './app/(pages|styleguide)/**/*.(md|html)',
]);
const path = require('path');
const fs = require('fs');
const fm = require('front-matter');

const routes = filePaths.map((filePath) => {
    const fileContent = fs.readFileSync(
        path.join(__dirname, `.${filePath}`),
        'utf8'
    );
    const { name, route } = fm(fileContent).attributes;

    return {
        name,
        href: route,
    };
});

const api = {
    data: routes,
    tree() {
        const routesMatrix = routes.map((route) => route.name?.split('.'));
        const routesTree = {};

        routesMatrix.forEach((crumbs) => {
            // For each route array (breadcrumbs)

            if (!crumbs) return;

            const baseRoute = crumbs[0];

            if (!routesTree[baseRoute]) {
                routesTree[baseRoute] = {};
            }

            // starting depth
            var current = routesTree;

            // recursively add routes
            for (var i = 0; i < crumbs.length; i++) {
                const routeIndex = crumbs.slice(0, i + 1).join('.');

                // if route object not yet preset, create
                if (!current[crumbs[i]]) {
                    current[crumbs[i]] = {};
                }

                // merge route object with new data
                current[crumbs[i]] = {
                    ...current[crumbs[i]],
                    name: routeIndex,
                    href: api.find(routeIndex),
                };

                // set new depth
                current = current[crumbs[i]];
            }
        });

        return routesTree;
    },
    all() {
        // @return route data Array
        return routes;
    },
    find(name, locale) {
        // find route by name
        // @return href Object|String
        let route = routes.find((route) => route.name === name);

        if (route && locale && route.href[locale]) {
            return route.href[locale];
        } else if (route && route.href) {
            return route.href;
        } else if (locale) {
            return `/${locale}`;
        } else {
            return '/en';
        }
    },
};

module.exports = api;
