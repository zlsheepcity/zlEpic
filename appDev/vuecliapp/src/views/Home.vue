<template>
  <div class="home">
    <h1>vue-cli-app</h1>
    <HelloWorld msg="Requierements Tests"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
