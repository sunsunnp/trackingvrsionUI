/*!

 =========================================================
 * Vue Paper Dashboard - v2.0.0
 =========================================================

 * Product Page: http://www.creative-tim.com/product/paper-dashboard
 * Copyright 2019 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import Vue from "vue";
import App from "./App";
import router from "./router/index";
import firebase from 'firebase/app'

import PaperDashboard from "./plugins/paperDashboard";
import "vue-notifyjs/themes/default.css";
import "bootstrap/dist/css/bootstrap.css";

Vue.use(PaperDashboard);
const config = {
  apiKey: 'AIzaSyArSf5RMP9p6RUUWMD3utA3rGvTXVhIE34',
  authDomain: 'seniorproject-668de.firebaseapp.com',
  databaseURL: 'https://seniorproject-668de.firebaseio.com',
  projectId: 'seniorproject-668de',
  storageBucket: 'seniorproject-668de.appspot.com',
  messagingSenderId: '527645376118'
};
firebase.initializeApp(config)


/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
