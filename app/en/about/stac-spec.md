---
title: "The STAC Spec"
layout: default
body: |- 
    More details about STAC spec Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, quo. Eos necessitatibus adipisci ad, doloremque.
---
{% from 'hero.html' import hero %}

::: .text-white

{{ hero(
    heading=title,
    body=body,
    mods=['dark', 'left']
) }}

:::

::: .container pt-5

## Item

An item is Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nam esse, temporibus, beatae nisi assumenda excepturi cupiditate aliquid.

```json
{
    "stac_version": "1.0.0",
    "type": "Feature",
    "id": "20201211_223832_CS2",
    "bbox": [...],
    "geometry": {...},
    "properties": {...},
    "collection": "simple-collection",
    "links": [...],
    "assets": {...}
}
```

## Catalog

A catalog is Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nam esse, temporibus, beatae nisi.

```json
{
    "stac_version": "1.0.0",
    "type": "Catalog",
    "id": "20201211_223832_CS2",
    "description": "A simple catalog example",
    "links": [...],
}
```


## Collection

A collection is Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nam esse, temporibus, beatae nisi assumenda excepturi cupiditate.

```json
{
    "stac_version": "1.0.0",
    "type": "Collection",
    "license": "ISC",
    "id": "20201211_223832_CS2",
    "description": "A simple collection example",
    "links": [...],
    "extent": {...},
    "summaries": {...},
}
```

## STAC API

Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quia! Vel sit doloribus commodi expedita dolores a reiciendis magni facilis velit! Dolore, eveniet corporis aspernatur architecto odio amet sit fugiat?

### Static API

Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quia! Vel sit doloribus commodi expedita dolores a reiciendis magni facilis velit! Dolore, eveniet corporis aspernatur architecto odio amet sit fugiat?

### Dynamic API

Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quia! Vel sit doloribus commodi expedita dolores a reiciendis magni facilis velit! Dolore, eveniet corporis aspernatur architecto odio amet sit fugiat?