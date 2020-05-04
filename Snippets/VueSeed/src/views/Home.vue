<template>
<v-container>

    <el-navigator/>

</v-container>
</template>

<script>

// --------------------------------- export seed

    let props       = []
    let components  = {}
    let methods     = {}
    let computed    = {}
    let data        = {}

// --------------------------------- Navigator

    import ElNavigator from '@/components/el-navigator.vue'
    components = { ElNavigator, ...components }

// --------------------------------- export ready

export default {

    name: 'Home',
    props,
    components,
    methods,
    computed,
    data () { return data }

}

</script>
