<template>

  <div class="home">
    <h1>vue-cli-app</h1>
    <HelloWorld msg="Requierements Tests"/>

    <section>
        <h3>※ Observable State in Master</h3>
        <ul>
            <li>Name:   {{ name }}  </li>
            <li>Points: {{ points }}</li>
        </ul>
        <button @click="addPoints(1)">Add point</button>
    </section>

    <observable-state></observable-state>
    <the-component :attribute="GiveToComponent"></the-component>
    <button @click="GiveToComponent = 'Is Changed!'">Change for Component</button>


  </div>

</template>

<script>
// @ is an alias to /src
import HelloWorld   from '@/components/HelloWorld.vue'
import TheComponent from '@/components/TheComponent.vue'

import OS              from '@/warriors/ObservableState.js'
import ObservableState from '@/warriors/ObservableState.vue'

export default {

    name: 'home',
    components: {
        HelloWorld,
        ObservableState,
        TheComponent
    },

    data() {
        return {
            GiveToComponent: "Component attribute value"
        }
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
