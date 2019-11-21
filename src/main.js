import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import Antd from 'ant-design-vue'

// import 'ant-design-vue/dist/antd.less'

import {
  Button,Menu
} from "ant-design-vue";

Vue.use(Button);
Vue.use(Menu)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")