<template>
    <div>

        <h1>Pages</h1>

        <router-link v-slot="{ href, route, navigate, isActive, isExactActive }"
            to="/">
            <v-btn
                :disabled="isExactActive"
                @click="navigate"
                :href="href"
                >Home</v-btn>
        </router-link>

        <router-link v-slot="{ href, route, navigate, isActive, isExactActive }"
            to="/Companies">
            <v-btn class="ml-2"
                @click="navigate"
                :href="href"
                >Companies</v-btn>
        </router-link>

        <router-link v-slot="{ href, route, navigate, isActive, isExactActive }"
            to="/Products">
            <v-btn class="ml-2"
                @click="navigate"
                :href="href"
                >Products</v-btn>
        </router-link>

        <router-link v-slot="{ href, route, navigate, isActive, isExactActive }"
            to="/Certificates">
            <v-btn class="ml-2"
                @click="navigate"
                :href="href"
                >Certificates</v-btn>
        </router-link>

    </div>
</template>
<script>

// --------------------------------- export seed

    let props       = []
    let components  = {}
    let methods     = {}
    let computed    = {}
    let data        = {}

    // Router

    import Router from '@/app/router'
    components = { Router, ...components }

// --------------------------------- export ready

export default {

    name: 'NaturalNavigator',
    props,
    components,
    methods,
    computed,
    data () { return data }

}

</script>
