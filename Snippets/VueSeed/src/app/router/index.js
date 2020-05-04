// use router

import Vue          from 'vue'
import VueRouter    from 'vue-router'

Vue.use(VueRouter)

// activate routes from source

import routes       from './routes.js'
const  Router     = new VueRouter({routes})

// export ready

export default Router
