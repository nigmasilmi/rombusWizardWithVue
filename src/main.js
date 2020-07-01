import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faTrash,
  faLink,
  faListUl,
  faRandom,
  faStar,
  faEnvelope,
  faChevronLeft,
  faBinoculars,
  faEye,
  faThumbsUp,
  faCode
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faTrash,
  faLink,
  faListUl,
  faRandom,
  faStar,
  faEnvelope,
  faChevronLeft,
  faBinoculars,
  faEye,
  faThumbsUp,
  faCode
);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
