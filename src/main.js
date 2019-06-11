import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret, faClipboardList, faUser, faEnvelope, faUnlockAlt, faPhoneAlt, faAddressBook, faMapMarkerAlt, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
const VueInputMask = require('vue-inputmask').default;

library.add(faUserSecret, faClipboardList, faUser, faEnvelope, faUnlockAlt, faPhoneAlt, faAddressBook, faMapMarkerAlt, faSearch);

Vue.use(VueInputMask);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

// Importing the global css file
import "@/assets/global.css"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
