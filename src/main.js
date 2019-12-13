import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import Authorized from './components/Authorzied.vue';
Vue.component('Authorized', Authorized);

import { checkAuth } from './router/auth';

import Auth from './directives/auth';

Vue.use(Auth, {
  name: 'auth',
  method: (el, binding) => {
    if (!checkAuth(binding.value)) {
      el.parentNode && el.parentNode.removeChild(el);
    }
  },
});

import { Button, Menu, Layout, Icon, Drawer, Radio } from 'ant-design-vue';

Vue.use(Button);
Vue.use(Menu);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);

Vue.config.productionTip = false;

console.log(process.env, 'devdevdevdev');

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
