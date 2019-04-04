# Installation command

npx create-nuxt-app ProjectName
...
cd ProjectName

npm run dev
npm run build

# SASS

npm install --save-dev node-sass sass-loader

# Workflow

Nuxt.js will transform every .vue file inside the pages directory as a route for the application.

> pages/index.vue

```html
<template>
    <section>
      <h1>Hello world!</h1>
    </section>
</template>

<script>
    import Logo from '~/components/Logo.vue'

    export default {
      components: {
        Logo
      }
    }
</script>

<style lang="scss">
    section { h1 { color:red; } }
</style>
```