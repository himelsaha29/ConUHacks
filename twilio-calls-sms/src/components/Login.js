import axios from "axios";
import Router from "../router/index";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



//configuration
var config = require("../../config");
var frontendUrl = "http://" + config.dev.host + ":" + config.dev.port;
var backendUrl =
  "http://" + config.dev.backendHost + ":" + config.dev.backendPort;

var AXIOS = axios.create({
  baseURL: backendUrl,
  headers: { "Access-Control-Allow-Origin": frontendUrl },
});


//page view
export default {
  name: "Login",
  data() {
    return {
      error: "",
      response: [],
      pageTitle: "",
    };
  },

  methods: {

    // signup page
    goToSignUp: function () {
      Router.push({
        path: "/signup",
        name: "SignUpPage",
      });
    },

    enter: function () {
      Router.push({
        path: "/sendtext",
        name: "FunctionPage",
      });
    },

    login: function(email, password) {

      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        this.enter();
        this.error = '';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage.substring(10));
    // ..
      this.error = errorMessage.substring(10);
  });
    }

  },
};
