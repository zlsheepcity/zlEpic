<template>
    <section>
        <h3>※ Observable State in Component</h3>
        <ul>
            <li>Name:   {{ name }}  </li>
            <li>Points: {{ points }}</li>
        </ul>
        <button @click="addPoints(1)">Add point</button>
    </section>
</template>

<script>
    import OS from '@/warriors/ObservableState.js'

    export default {
        name: 'observable-state',
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
