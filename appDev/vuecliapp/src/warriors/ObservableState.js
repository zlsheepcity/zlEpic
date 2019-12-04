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

// Define actions

const getters = {
    points: () => state.points,
    name:   () => state.name
}
const actions = {
    addPoints: x => state.points = x + state.points,
    setName:   x => state.name   = x
}

// Export

const  OS = { getters, actions }
export default OS
