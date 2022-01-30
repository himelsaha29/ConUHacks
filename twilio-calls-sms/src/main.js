import Vue from "vue";
import App from "./App.vue";
import router from './router'
import { initializeApp } from "firebase/app";

// Import the Auth0 configuration
import { domain, clientId } from "../auth_config.json";

// Import the plugin here
import { Auth0Plugin } from "./auth";

// Install the authentication plugin here
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

const firebaseConfig = {
  apiKey: "AIzaSyBjkRekYl7u2fLbRDcUTLneXQoQTMv9Dso",
  authDomain: "conuhacks-94ce2.firebaseapp.com",
  projectId: "conuhacks-94ce2",
  storageBucket: "conuhacks-94ce2.appspot.com",
  messagingSenderId: "587913802548",
  appId: "1:587913802548:web:fe7996618156ccf1d92b61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");