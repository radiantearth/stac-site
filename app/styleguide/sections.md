---
title: "Styleguide"
layout: styleguide
hero_content:
    preheading: Example
    heading: This is a heading
    body: |-
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos tenetur quae, quas praesentium, minus recusandae ex commodi aliquam nisi maxime tempora.

        Quis aliquid sed. Consequatur fugit debitis earum aperiam adipisci.
---

{% from 'hero.html' import hero %}

<section>

::: container
## Hero Style #1
:::

{{ hero(
    style=1,
    heading=hero_content.heading, 
    preheading=hero_content.preheading,
    body=hero_content.body,
    cta_url='/',
    image="/public/images/satmap-xl.jpg"
) }}
{{ hero(
    style=1,
    heading=hero_content.heading, 
    preheading=hero_content.preheading,
    body=hero_content.body,
    cta_url='/',
    image="/public/images/satmap-xl.jpg",
    mods=['dark']
) }}

</section>

<!-- Section 2 -->
<section class='hero-section-1'>

::: container
## Hero Style #2
:::

{{ hero(
    style=2,
    heading=hero_content.heading, 
    preheading=hero_content.preheading,
    body=hero_content.body,
    cta_url='/',
    image="/public/images/satmap-md.jpg"
) }}
{{ hero(
    style=2,
    heading=hero_content.heading, 
    preheading=hero_content.preheading,
    body=hero_content.body,
    cta_url='/',
    image="/public/images/satmap-md.jpg",
    mods=['dark','reverse']
) }}

</section>

<section class="hero-section-2">

::: container
## Hero Style #3
:::

{{ hero(
    heading=hero_content.heading, 
    preheading=hero_content.preheading,
    body=hero_content.body,
    cta_url='/',
    mods=['dark','overlap', 'center']
) }}

<div class="container">
    <div class="grid md:grid-cols-3 gap-4">
        <div class="card bg-blue-700 text-white text-center">
            <div class="text-blue-400 w-20 my-5 mx-auto">{{ 'satellite-solid' | svg }}</div>
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <a class="cta--understated inline-block mb-4" href="#">Understated CTA</a>
        </div>
        <div class="card bg-blue-700 text-white text-center">
            <div class="text-blue-400 w-20 my-5 mx-auto">{{ 'earth-oceania-solid' | svg }}</div>
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <a class="cta--understated inline-block mb-4" href="#">Understated CTA</a>
        </div>
        <div class="card bg-blue-700 text-white text-center">
            <div class="text-blue-400 w-20 my-5 mx-auto">{{ 'moon-solid' | svg }}</div>
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <a class="cta--understated inline-block mb-4" href="#">Understated CTA</a>
        </div>
    </div>
</div>

</section>