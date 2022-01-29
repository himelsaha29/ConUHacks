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
  name: "SignUp",
  data() {
    return {
      error: "",
      response: [],
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
  },
};
