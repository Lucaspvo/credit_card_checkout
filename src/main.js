import Vue from 'vue';
import { VueMaskDirective } from 'v-mask';
import BootstrapVue from 'bootstrap-vue';
import App from './components/presentation/App.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.directive('mask', VueMaskDirective);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  render: h => h(App),
});
