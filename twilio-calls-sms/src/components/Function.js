import axios from "axios";
import Router from "../router/index";
import { getAuth, signOut } from "firebase/auth";



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
  name: "Function",
  data() {
    return {
      error: "",
      response: [],
      pageTitle: "",
    };
  },

  methods: {

    // home page
    home: function () {
      Router.push({
        path: "/",
        name: "HomePage",
      });
    },

    logout: function() {

      const auth = getAuth();
      signOut(auth).then(() => {
      // Sign-out successful.
        this.home();
        this.error = '';
      }).catch((error) => {
      // An error happened.
        this.error = error.message.substring(10);
      });
    }

  },
};
