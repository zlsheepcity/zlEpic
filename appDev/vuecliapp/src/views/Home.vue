<template>

  <div class="home">
    <h1>vue-cli-app</h1>
    <HelloWorld msg="Requierements Tests"/>

    <section>
        <h3>※ Observable Store</h3>
        <ul>
            <li>Name: {{ name }} </li>
            <li>Points: {{ points }}</li>
        </ul>
        <button @click="addPoints(1)">Add point</button>
    </section>

  </div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import OS from '@/warriors/ObservableState.js'

export default {
    name: 'home',
    components: {
        HelloWorld
    },
    computed: {
        // Observable
        ...OS.getters
    },
    methods: {
        // Observable
        ...OS.actions
    }
}
</script>
