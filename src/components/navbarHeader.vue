<template>
  <v-container
    class="nav primary"
    fluid
  >
  <v-btn
    icon
    class="text-nav2"
    @click="setDark()"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path :d="iconMode" :fill="iconColor"/></svg>
  </v-btn>
  </v-container>
</template>
<script>
export default {
  name: "navbarHeader",
  methods: {
    setDark() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  },
  computed: {
      iconColor() {
        return this.$vuetify.theme.dark ? 'white' : 'black';
      },
      iconMode() {
        let icon;
        if (this.$vuetify.theme.dark) {
          icon = "M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"
        } else {
          icon = "M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938 7.999 7.999 0 0 0 4 12z"
        }
        return icon
      }
    },
}
</script>
<style scoped>
.nav {
  position: fixed;
  /* background-color: blue; */
  top: 0;
  left: 0;
  height: 50px;
  z-index: 1;
}
.text-nav2 {
  position: absolute;
  top: 5px;
  right: 30px;
}
</style>