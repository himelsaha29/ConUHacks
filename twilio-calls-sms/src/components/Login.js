import axios from "axios";
import Router from "../router/index";

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

    login() {
      this.$auth.loginWithRedirect();
    }

  },
};
