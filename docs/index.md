---
layout: 'home'
sidebar: false
title: 'The IDE for Minecraft Add-Ons'
description: 'bridge. is a light-weight, yet powerful, IDE for Minecraft add-ons.'

hero:
    name: bridge.
    text: The IDE for Minecraft Add-Ons
    tagline: Light-weight, powerful, easy to use!
    image:
        src: /favicon.svg
        alt: bridge. logo
    actions:
        - theme: brand
          text: Download
          link: /guide/download/
        - theme: alt
          text: Open Web App
          link: https://editor.bridge-core.app/

features:
    - icon: ⚡️
      title: ZIPPY!
      details: 'Development with bridge. is faster thanks to its extendable compiler architecture, rich auto-completions and live previews of the things you work on'
      link: /guide/features/
      linkText: Learn more
    - icon: 🛠️
      title: EXTENDABLE!
      details: 'Custom components, custom commands, file presets and themes: You can do almost anything with extensions for bridge. and choose from an already great extension ecosystem'
      link: /extensions/
      linkText: Learn more
    - icon: 🚀
      title: SEAMLESS!
      details: 'bridge. interacts seamlessly with Minecraft and syncs behavior packs, resource pack, skin packs and worlds to the com.mojang folder automatically'
      link: /guide/misc/com-mojang-syncing/
      linkText: Learn more
---

<script setup>
import Creations from "./.vitepress/theme/components/Creations.vue"
import creations from './data/creations.json'

const topThreeCreations = creations.filter(creation => creation.featured)
const notFeatured = creations.filter(creation => !creation.featured)
while(topThreeCreations.length < 4) {
  topThreeCreations.push(notFeatured.shift())
}
if(topThreeCreations.length > 3) {
  topThreeCreations.splice(3)
}

</script>

<Creations title="Getting Inspired" :items="topThreeCreations"/>
