<template>
  <div
    class="back"
  >
    <div
      class="nav-bar mx-auto mb-6 d-flex justify-space-around"
    >
    <v-btn
      icon
      v-for="(item, idx) in icons"
      :key="idx"
      :class="idx !== icons.length - 1 ? 'mr-2' : ''"
      :href="item.link"
    >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path :d=item.icon_path :fill="iconColor"/></svg>
    </v-btn>
    </div>
  </div>
</template>

<script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'navbar',
    data() {
      return {
        darkMode: false,
        icons: [
          {
            icon_path: "M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zM6 19h12V9.157l-6-5.454-6 5.454V19zm2-4h8v2H8v-2z",
            link: "#section1",
          },
          {
            icon_path: "M10 3h4a8 8 0 1 1 0 16v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8zm2 14h2a6 6 0 1 0 0-12h-4a6 6 0 0 0-6 6c0 3.61 2.462 5.966 8 8.48V17z",
            link: "#section2"
          },
          {
            icon_path: "M6.94 14.036c-.233.624-.43 1.2-.606 1.783.96-.697 2.101-1.139 3.418-1.304 2.513-.314 4.746-1.973 5.876-4.058l-1.456-1.455 1.413-1.415 1-1.001c.43-.43.915-1.224 1.428-2.368-5.593.867-9.018 4.292-11.074 9.818zM17 9.001L18 10c-1 3-4 6-8 6.5-2.669.334-4.336 2.167-5.002 5.5H3C4 16 6 2 21 2c-1 2.997-1.998 4.996-2.997 5.997L17 9.001z",
            link:"#section3"
          },
          {
            icon_path: "M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z",
            link: "#section4"
          },
        ]
      }
    },
    computed: {
      iconColor() {
        return this.$vuetify.theme.dark ? 'white' : 'black';
      }

    }
  }
</script>
<style scoped>
.nav-bar {
  width: auto; /* Define a largura automática */
  max-width: 350px;
  position: fixed;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  bottom: 3px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 20px;
}
.back {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>