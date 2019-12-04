/*
    State store method
    with Vue.observable
*/

import Vue from 'vue'

// Define state

const state = Vue.observable({
    points:   100,
    name:    'player'
})
const getters = {
    points: () => state.points,
    name:   () => state.name
}
const actions = {
    addPoints: x => state.points = x + state.points,
    setName:   x => state.name   = x
}

const  OS = { getters, actions }
export default OS

// Usage sample

/*

<template>
    <div>
        <ul>
            <li>Name:   {{ name }}  </li>
            <li>Points: {{ points }}</li>
        </ul>
        <button @click="addPoints(1)">Add point</button>
    </div>
</template>

<script>
    import OS from '@/warriors/ObservableState.js'

    export default {
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

*/
