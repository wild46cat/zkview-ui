// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import $ from 'jquery'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import 'admin-lte/dist/css/AdminLTE.min.css'
import 'admin-lte/dist/css/skins/_all-skins.min.css'
import 'admin-lte/dist/js/app'
import 'admin-lte/dist/js/adminlte'

Vue.config.productionTip = false;
Vue.use(VueResource);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});
