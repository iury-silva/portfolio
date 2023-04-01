<template>
  <v-app>
    <v-main class="back primary">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap");
* {
  font-family: "Poppins", sans-serif;
}
::-webkit-scrollbar {
  background-color: rgb(144, 144, 144);
  width: 10px;
}
::-webkit-scrollbar-thumb {
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
}
html {
  scroll-behavior: smooth;
}
.wave {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #000000, #ffffff);
  opacity: 0;
  z-index: -1;
  animation: wave 2s ease-out forwards;
}

@keyframes wave {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(200);
  }
}

.dark .wave {
  animation: wave-dark 2s ease-out forwards;
}

@keyframes wave-dark {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(200);
  }
}
</style>
