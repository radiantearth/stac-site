const { snippet, jsonSnippet } = require('../_util');

module.exports = {
    "content": {
        "en": `
## Item

An item is Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nam esse, temporibus, beatae nisi assumenda excepturi cupiditate aliquid.

\`\`\`json
${jsonSnippet('spec/item-simple.json')}
\`\`\`

## Catalog

A catalog is Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nam esse, temporibus, beatae nisi.

\`\`\`json
${jsonSnippet('spec/catalog-simple.json')}
\`\`\`


## Collection

A collection is Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nam esse, temporibus, beatae nisi assumenda excepturi cupiditate.

\`\`\`json
${jsonSnippet('spec/collection-simple.json')}
\`\`\`

## STAC API

Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quia! Vel sit doloribus commodi expedita dolores a reiciendis magni facilis velit! Dolore, eveniet corporis aspernatur architecto odio amet sit fugiat?

### Static API

Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quia! Vel sit doloribus commodi expedita dolores a reiciendis magni facilis velit! Dolore, eveniet corporis aspernatur architecto odio amet sit fugiat?

### Dynamic API

Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quia! Vel sit doloribus commodi expedita dolores a reiciendis magni facilis velit! Dolore, eveniet corporis aspernatur architecto odio amet sit fugiat?`,
        "lo-ip": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quia! Vel sit doloribus commodi expedita dolores a reiciendis magni facilis velit! Dolore, eveniet corporis aspernatur architecto odio amet sit fugiat?"
    }
}