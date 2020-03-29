import Vue from 'vue';
import App from './App.vue';
import TUI from './packages/index';
Vue.config.productionTip = false;
console.log(TUI, 'TUI');
Vue.use(TUI);

new Vue({
  render: h => h(App)
}).$mount('#app');
