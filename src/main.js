import 'normalize.css/normalize.css';
import 'vuetify/dist/vuetify.min.css';

import Vue from 'vue';
import VueKeyCloak from '@dsb-norge/vue-keycloak-js';
import axios from 'axios';
import VueAxios from 'vue-axios';

import vuetify from './plugins/vuetify';
import i18n from './locale'; // Internationalization

import App from './App.vue';
import router from './router';
import store from './store';

import './router/permission';

Vue.use(VueAxios, axios);

Vue.use(VueKeyCloak, {
  init: {
    onLoad: 'login-required',
  },
  config: {
    realm: 'acs-test-realm',
    url: 'https://keycloak-test.apollo.com.ph/auth',
    clientId: 'acs-user',
  },
  onReady: () => {
    new Vue({
      router,
      store,
      i18n,
      vuetify,
      render: (h) => h(App),
    }).$mount('#app');
  },
});
