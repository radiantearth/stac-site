---
title: "Styleguide"
layout: styleguide

hero_4:
    preheading: Example
    heading: This is a heading
    mods: [ 'dark', 'overlap' ] 
    body: |-
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos tenetur quae, quas praesentium, minus recusandae ex commodi aliquam nisi maxime tempora.

        Quis aliquid sed. Consequatur fugit debitis earum aperiam adipisci.
---

{% from 'hero.html' import HeroStyle1, HeroStyle2, HeroStyle3 %}

<section
    class=""
    id="">

::: container
## Hero Style #1
:::

{{ HeroStyle1() }}
{{ HeroStyle1(theme='dark') }}
</section>

<!-- Section 2 -->
<section class='hero-section-1'>

::: container
## Hero Style #2
:::

{{ HeroStyle2(theme='dark', reversed=true) }}
{{ HeroStyle2() }}
</section>

<section class="hero-section-2">

::: container
## Hero Style #3
:::

{{ HeroStyle3(
    heading=hero_4.heading, 
    preheading=hero_4.preheading,
    body=hero_4.body,
    mods=['dark','overlap']
) }}

{% from 'svg.html' import svg %}

<div class="container">
    <div class="grid md:grid-cols-3 gap-4">
        <div class="card bg-blue-700 text-white text-center">
            <div class="text-blue-400 w-20 my-5 mx-auto">{{ 'satellite-solid' | svg }}</div>
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <a class="cta-understated inline-block mb-4" href="#">Understated CTA</a>
        </div>
        <div class="card bg-blue-700 text-white text-center">
            <div class="text-blue-400 w-20 my-5 mx-auto">{{ 'earth-oceania-solid' | svg }}</div>
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <a class="cta-understated inline-block mb-4" href="#">Understated CTA</a>
        </div>
        <div class="card bg-blue-700 text-white text-center">
            <div class="text-blue-400 w-20 my-5 mx-auto">{{ 'moon-solid' | svg }}</div>
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <a class="cta-understated inline-block mb-4" href="#">Understated CTA</a>
        </div>
    </div>
</div>

</section>