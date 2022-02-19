import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from './i18n/messages';
import App from './App.vue';
import './registerServiceWorker';

Vue.use(VueI18n);
Vue.config.productionTip = false;

new Vue({
  i18n: new VueI18n({
    locale: navigator.language.includes('-') ? navigator.language.split('-')[0] : navigator.language,
    messages,
  }),
  render: (h) => h(App),
}).$mount('#app');
