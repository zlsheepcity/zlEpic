console.log('app-vue.js')

const VueKing_Welcome = () => import('https://cdn.jsdelivr.net/npm/vue@2.6.0').then(VueKing)
const VueKing = function LaunchVueEnvironment (o) {

    console.log("※ Welcome Vue King")

    function RenderAppVue(App) {
        Vue.config.productionTip = true
     // Render page
        console.log("※ app-vue render func 2")
        console.log(App, o)
        console.log(Vue.config)

        new Vue({
          render: h => h(App),
        }).$mount('#app')
        App.default.render()

    }

    import('./app.vue').then(RenderAppVue)

}

VueKing_Welcome()

//import('https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.esm.browser.js').then(f=>console.log('vue!'))


function LoadAppVue(o) {
    import('./app.vue').then(RenderAppVue)
}

// import('https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.esm.browser.js').then(LoadAppVue)

/*
        import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.esm.browser.js'
        import App from './app/script/app.vue'

        Vue.config.productionTip = false

        new Vue({
          render: h => h(App),
        }).$mount('#app')
*/
