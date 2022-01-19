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

<section
    class=""
    id="">

::: container
## Hero Style #1
:::

{% include 'hero/hero-style-1', theme: 'light' %}
{% include 'hero/hero-style-1', theme: 'dark' %}
</section>

<!-- Section 2 -->
<section class='hero-section-1'>

::: container
## Hero Style #2
:::

{% include 'hero/hero-style-2', theme: 'dark', reversed: true %}
{% include 'hero/hero-style-2' %}
</section>

{% section %}

::: container
## Hero Style #3
:::

{% include 'hero/hero-style-3' %}
{% endsection %}

{%-
    include 'hero/hero-style-4', 
    heading: hero_4.heading,
    preheading: hero_4.preheading,
    body: hero_4.body,
    mods: hero_4.mods
-%}
{% include './_three-cards' %}
