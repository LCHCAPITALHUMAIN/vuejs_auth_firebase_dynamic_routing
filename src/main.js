import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { auth } from "./firebase";

// import * as firebase from "firebase";
/*import firebase from "firebase";


// import VueRouter from "vue-router";
const configOptions = {
  apiKey: "AIzaSyAfSryJdIf1E1HWgommtQnBdnfdqgLjfXU",
  authDomain: "online-store-conversion.firebaseapp.com",
  databaseURL: "https://online-store-conversion.firebaseio.com",
  projectId: "online-store-conversion",
  storageBucket: "online-store-conversion.appspot.com",
  messagingSenderId: "173896780352",
  appId: "1:173896780352:web:e3eeb34f1db04d0b94eda5"
};

firebase.initializeApp(configOptions);
firebase.auth().onAuthStateChanged((user) => {
  store.dispatch("fetchUser", user);
});
*/

Vue.config.productionTip = false;
let app;
auth.onAuthStateChanged((user) => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App)
    }).$mount("#app");
  }

  if (user) {
    store.dispatch("fetchUser", user);
  }
});
/*
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");*/
