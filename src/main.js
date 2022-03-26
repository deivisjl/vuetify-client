import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VeeValidate from 'vee-validate';

import VueToastr2 from 'vue-toastr-2'
import 'vue-toastr-2/dist/vue-toastr-2.min.css'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import _ from 'lodash'

const options = {
  cancelButtonColor: '#F44336',
  confirmButtonColor: '#1565c0',
  confirmButtonText: "Confirmar",
  cancelButtonText: "Cancelar"
}

const VueValidationEs = require('vee-validate/dist/locale/es');

const config = {
  locale: 'es',
  validity: true,
  dictionary: {
    es: VueValidationEs
  },
  fieldsBagName: 'campos',
  errorBagName: 'errors', // change if property conflicts
};

Vue.use(VeeValidate, config);
//lodash
Vue.use(_)

Vue.use(VueSweetalert2,options);

window.toastr = require('toastr')
Vue.use(VueToastr2)

Vue.config.productionTip = false

window.events = new Vue();

Vue.prototype.$eventHub = new Vue(); // Global event bus

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
