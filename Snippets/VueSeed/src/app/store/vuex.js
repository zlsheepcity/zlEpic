import Vue  from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Export seed

let state     = {}
let mutations = {}
let actions   = {}
let modules   = {}

// Add User

/*
import Dataman from '@/app/Dataman.js'
import    user from '@/models/ui-user.js'
user.Connect(Dataman.User)
state = { user, ...state }
mutations = {
    login  (state) { state.user.login()  },
    logout (state) { state.user.logout() },
...mutations }

*/

// Export

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules,
})
