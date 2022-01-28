---
title: "More About STAC"
layout: default
body: |-
    More detailed description of STAC Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
    
    Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat.
    
    Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus suscipit tortor eget felis porttitor volutpat.
---
{% from 'hero.html' import hero %}
{% from 'cta.html' import cta %}

{{ hero(
    preheading="STAC",
    heading=title,
    body=body,
    mods=['dark', 'overlap-xl']
) }}

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

{{ cta(text="Explore STAC Spec", url="/about/stac-spec") }}
:::

::: .container .mt-10
## The Problem and STAC as a Solution

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio quas velit exercitationem vitae ab maiores voluptatibus itaque, incidunt excepturi dignissimos dolores, reprehenderit porro. Numquam, repellat exercitationem. Autem saepe et error.

## The STAC Ecosystem

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio quas velit exercitationem vitae ab maiores voluptatibus itaque, incidunt excepturi dignissimos dolores, reprehenderit porro. Numquam, repellat exercitationem. Autem saepe et error.

{{ cta(text="Explore Tools & Resources", url="/about/tools-resources") }}
:::