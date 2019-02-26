import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify, {
  options: {
    customProperties: true
  },
  iconfont: "mdi",
  theme: {
    primary: "#1C3144",
    secondary: "#7EA8BE",
    accent: "#E2D278",
    error: "#F45B69",
    info: "#4392F1",
    success: "#9EE493",
    warning: "#FFF275",
    body: "#F7F7F2"
  }
});
