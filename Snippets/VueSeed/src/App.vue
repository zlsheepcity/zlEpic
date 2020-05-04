<template>
    <v-app>

        <v-container>



        </v-container>

        <router-view/>
    </v-app>
</template>

<script>

// --------------------------------- export seed

    let components  = {}
    let props       = []
    let methods     = {}
    let computed    = {}
    let data        = {}

    import Router from '@/app/router'
    components = { Router, ...components }

// --------------------------------- hello world

//  import HelloWorld from './components/HelloWorld';
//  components = { HelloWorld, ...components }

// --------------------------------- export ready

export default {

    name: 'HQ',
    components,
    props,
    methods,
    computed,
    data () { return data }

}

</script>
