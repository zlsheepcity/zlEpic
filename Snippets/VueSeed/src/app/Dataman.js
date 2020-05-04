/*  Mr Dataman - frontend requests to backend */

const Dataman = {}
const Backend = {}

/* --------------------------------- tehnology axios */

import Vue          from 'vue'
import axios        from 'axios'
import VueAxios     from 'vue-axios'

Vue.use( VueAxios, axios )

const Backend_Axios = {

 // dna { url, data }
    post (dna) { return axios.post( dna.url, dna.data ) }

}

/**/

/* --------------------------------- tehnology firebase */

// npm install vuexfire firebase

import Vue               from 'vue'
import {firestorePlugin} from 'vuefire'
Vue.use(firestorePlugin)

import Firebase          from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

let firebaseConfig = {
    apiKey: "AIzaSyBuaXe8wQQWZYZJ119pygNkkHauWQBhBYE",
    authDomain: "med-form-b.firebaseapp.com",
    databaseURL: "https://med-form-b.firebaseio.com",
    projectId: "med-form-b",
    storageBucket: "med-form-b.appspot.com",
    messagingSenderId: "362033935366",
    appId: "1:362033935366:web:4c35713e88553bd9647f87"
}// https://console.firebase.google.com/u/0/project/med-form-b/settings/general/

Firebase.initializeApp(firebaseConfig)
Backend.Firebase = Firebase.firestore()

const Backend_Firebase = {

 // dna { target, data }
    post (dna) {
        return Backend.Firebase.collection(dna.target).add(dna.data)
    }

}

/**/

// --------------------------------- api

Dataman = {

    

...Dataman }

// --------------------------------- export ready

export default Dataman
