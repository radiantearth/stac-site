---
title: "More About STAC"
layout: default
body: |-
    More detailed description of STAC Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, quo. Eos necessitatibus adipisci ad, doloremque.
    
    STAC Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, quo. Eos necessitatibus adipisci ad, doloremque.
---
{% from 'hero.html' import HeroStyle3 %}

::: .-mt-10

{{ HeroStyle3(
    preheading="STAC",
    heading=title,
    body=body,
    mods=['dark', 'overlap-xl', 'left']
) }}

:::

::: .container .text-white

## The STAC Spec

Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione repellat, recusandae delectus

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

[Explore STAC Spec](/about/stac-spec)

:::

::: .container .mt-10

## The Problem and STAC as a Solution

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio quas velit exercitationem vitae ab maiores voluptatibus itaque, incidunt excepturi dignissimos dolores, reprehenderit porro. Numquam, repellat exercitationem. Autem saepe et error.

## The STAC Ecosystem

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio quas velit exercitationem vitae ab maiores voluptatibus itaque, incidunt excepturi dignissimos dolores, reprehenderit porro. Numquam, repellat exercitationem. Autem saepe et error.

[Explore Tools & Resources](/about/tools-resources)

:::