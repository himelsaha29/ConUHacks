import axios from "axios";
import Router from "../router/index";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


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
  name: "SignUp",
  data() {
    return {
      error: "",
      response: [],
      error: '',
      pageTitle: "",
    };
  },

  methods: {

    // Login page
    goToLogin: function () {
      Router.push({
        path: "/login",
        name: "LoginPage",
      });
    },


    create: function(email, password) {

      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        this.goToLogin();
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
