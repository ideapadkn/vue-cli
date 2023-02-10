import { createApp } from "vue";
import { useVuelidate } from "@vuelidate/core";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import 'materialize-css/dist/js/materialize.min.js';
import dateFilter from "./filters/date.filter";

// Vue.filter('date', dateFilter)

createApp(App).use(useVuelidate).use(store).use(router).mount("#app");
