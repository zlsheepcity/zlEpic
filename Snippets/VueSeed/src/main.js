// --------------------------------- Load Framework

import Vue     from 'vue'
import vuetify from './app/plugins/vuetify'

Vue.config.productionTip = false

// URL Mapping Data: ./app/router/routes.js
import router  from './app/router'

// Store Components
import store   from './app/store/vuex.js'

// --------------------------------- Design


// --------------------------------- Run Render

import App from './App.vue'

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
