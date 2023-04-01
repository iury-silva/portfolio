import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: "#ffffff",
      },
      dark: {
        primary: "#444654",
      },
    },
  },
});
