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
      email: "",
      response: [],
      pageTitle: "",
    };
  },

  created: function () {
    this.email = localStorage.getItem("savedUserEmail");
    if((this.email).length == 0) {
      this.home();
    }

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
        localStorage.setItem("savedUserEmail", "");
      }).catch((error) => {
      // An error happened.
        this.error = error.message.substring(10);
      });
    },

    sendText: function(to, message) {

      const email = localStorage.getItem("savedUserEmail");
      // check if email is not ''

      
      console.log("To: " + to + ", " + "message: " + message + " - from " + email);

      const url = "https://conuhacks-chat-6683.twil.io/send-request?From=" + email + "&To=" + to + "&Body=" + message;

      AXIOS.post(url)
        .then((response) => {
          console.log("success");
        })
        .catch((e) => {
          var errorMsg = e;
          this.error = errorMsg;
          console.log(errorMsg.message);
        });



    }

  },
};
