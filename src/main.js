// import { createApp } from "vue";
// import { useVuelidate } from "@vuelidate/core";
// import App from "./App.vue";
// import "./registerServiceWorker";
// import router from "./router";
// import store from "./store";
// import 'materialize-css/dist/js/materialize.min.js';
// import messagePlugin from "@/utils/message.plugin.js";
// import dateFilter from "./filters/date.filter";
// import * as firebase from "firebase/app";
// import 'firebase/auth'
// import 'firebase/database'

// // Vue.filter('date', dateFilter)

// // firebase.initializeApp = {
// //   apiKey: "AIzaSyBTdfjPpgzSwDGsboyO53OBDFWKd5bDu38",
// //   authDomain: "vue-cli-f7c16.firebaseapp.com",
// //   projectId: "vue-cli-f7c16",
// //   storageBucket: "vue-cli-f7c16.appspot.com",
// //   messagingSenderId: "132125491276",
// //   appId: "1:132125491276:web:572509cb3e6fa0af0df4e9",
// //   measurementId: "G-SYCDHB47GC"
// // }

// const app = createApp(App)

// app
//   .use(router)
//   .use(useVuelidate)
//   .use(store)
//   .mount("#app")

// // firebase.auth().onAuthStateChange(() => {
// //   if (!app) {
// //     app
// //       .use(router)
// //       .use(useVuelidate)
// //       .use(store)
// //       .mount("#app")
// //   }
// // })



import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

firebase.initializeApp({
  apiKey: "AIzaSyDAPqALfM3xjg7II0tjg7GL6s73mKXRxEs",
  authDomain: "vue-crm-e3928.firebaseapp.com",
  databaseURL: "https://vue-crm-e3928.firebaseio.com",
  projectId: "vue-crm-e3928",
  storageBucket: "vue-crm-e3928.appspot.com",
  messagingSenderId: "251307374581"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})




