<template>
  <v-container class="mt-10" id="section1">
    <navbarHeader />
    <v-container class="mt-10">
      <section>
      <v-col cols="12" justify="center" align="center">
      <p class="subtitle-1 mb-0">Olá, eu sou o</p>
      <h1 :class="!isDark ? 'nome font-weight-black':'nomeDark'">Iury da Silva</h1>
      <p class="subtitle-1">Frontend Developer</p>
        <img
          src="@/assets/image-removebg-preview.png"
          class="avatar-img mb-6"
        />
        <v-col>
        <v-btn rounded class="mr-1" outlined>Download CV <svg class="ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13 13v5.585l1.828-1.828 1.415 1.415L12 22.414l-4.243-4.242 1.415-1.415L11 18.585V13h2zM12 2a7.001 7.001 0 0 1 6.954 6.194 5.5 5.5 0 0 1-.953 10.784v-2.014a3.5 3.5 0 1 0-1.112-6.91 5 5 0 1 0-9.777 0 3.5 3.5 0 0 0-1.292 6.88l.18.03v2.014a5.5 5.5 0 0 1-.954-10.784A7 7 0 0 1 12 2z" :fill="iconColor"/></svg></v-btn>
        <v-btn plain rounded>Sobre Mim</v-btn>

        </v-col>
      </v-col>
      </section>
      <!-- <div id="section2"></div> -->
      <section id="section2" class="section2 d-flex align-center" data-aos="fade-right">
          <h1 class="titles d-flex justify-center mb-5 absolute" :class="!isDark ? '':'titles-dark'">Sobre Mim</h1>
            <p class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore doloremque similique sed quae omnis accusamus minima facilis adipisci velit architecto harum, dicta animi minus rem cumque quos fugit amet modi repudiandae delectus, recusandae magni optio blanditiis earum. Eaque, modi. Eveniet nisi dolores consequatur alias quas laboriosam saepe dolore, earum, blanditiis amet ipsam? Minima suscipit voluptas, laboriosam, facilis omnis id repudiandae deleniti accusantium tenetur, exercitationem obcaecati soluta ut laudantium. Doloremque deserunt commodi ducimus iusto quis veniam molestiae corrupti, consectetur, perferendis itaque sint voluptates fugiat aut. Laboriosam quaerat corporis illum blanditiis, aperiam pariatur optio ea suscipit est nostrum, sint cumque necessitatibus! Iste officiis, ratione provident repellendus reprehenderit perspiciatis voluptatibus reiciendis eveniet expedita repellat ex atque vel voluptates architecto suscipit. Voluptatum, accusantium sequi repellendus culpa molestias tenetur eos sit. Laboriosam sed provident tenetur delectus est voluptatem dolorem quos pariatur, corporis sunt rem neque quisquam placeat nihil itaque illum inventore adipisci architecto a culpa ad quis minima blanditiis quas? Impedit quasi quod incidunt optio sint animi debitis, officia sit sed assumenda maxime quas nostrum dolorum consequuntur? Sequi, a assumenda ipsum natus inventore dignissimos tempore illum aspernatur? Explicabo cupiditate vitae id commodi? Iusto quos exercitationem facilis impedit laboriosam iste sequi possimus tempora recusandae a eos, iure reprehenderit, provident, minus doloremque sint totam corrupti asperiores tempore itaque. Atque aliquid laboriosam possimus ad, sequi porro reiciendis temporibus quaerat sapiente dignissimos nobis! A corporis aspernatur maxime similique harum doloremque, omnis nulla dolores neque, accusamus fugiat porro numquam expedita consequuntur quidem qui molestias repellat rem. Ex necessitatibus quod repellendus veritatis sequi mollitia debitis vel eligendi consequuntur perspiciatis est porro corporis quas sit, molestias unde adipisci velit, perferendis recusandae aliquid dicta earum. Animi quasi soluta, eius harum at accusantium maiores quas dignissimos exercitationem velit, totam inventore voluptas quidem cum praesentium! Iure eaque numquam, officiis tenetur harum eos asperiores veniam optio!</p>
      </section>
      <section id="section3" class="section2 d-flex align-center flex-row-reverse" data-aos="fade-right">
          <h1 class="titles-right d-flex justify-center mb-5 absolute" :class="!isDark ? '':'titles-dark'">Habilidades</h1>
            <p class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore doloremque similique sed quae omnis accusamus minima facilis adipisci velit architecto harum, dicta animi minus rem cumque quos fugit amet modi repudiandae delectus, recusandae magni optio blanditiis earum. Eaque, modi. Eveniet nisi dolores consequatur alias quas laboriosam saepe dolore, earum, blanditiis amet ipsam? Minima suscipit voluptas, laboriosam, facilis omnis id repudiandae deleniti accusantium tenetur, exercitationem obcaecati soluta ut laudantium. Doloremque deserunt commodi ducimus iusto quis veniam molestiae corrupti, consectetur, perferendis itaque sint voluptates fugiat aut. Laboriosam quaerat corporis illum blanditiis, aperiam pariatur optio ea suscipit est nostrum, sint cumque necessitatibus! Iste officiis, ratione provident repellendus reprehenderit perspiciatis voluptatibus reiciendis eveniet expedita repellat ex atque vel voluptates architecto suscipit. Voluptatum, accusantium sequi repellendus culpa molestias tenetur eos sit. Laboriosam sed provident tenetur delectus est voluptatem dolorem quos pariatur, corporis sunt rem neque quisquam placeat nihil itaque illum inventore adipisci architecto a culpa ad quis minima blanditiis quas? Impedit quasi quod incidunt optio sint animi debitis, officia sit sed assumenda maxime quas nostrum dolorum consequuntur? Sequi, a assumenda ipsum natus inventore dignissimos tempore illum aspernatur? Explicabo cupiditate vitae id commodi? Iusto quos exercitationem facilis impedit laboriosam iste sequi possimus tempora recusandae a eos, iure reprehenderit, provident, minus doloremque sint totam corrupti asperiores tempore itaque. Atque aliquid laboriosam possimus ad, sequi porro reiciendis temporibus quaerat sapiente dignissimos nobis! A corporis aspernatur maxime similique harum doloremque, omnis nulla dolores neque, accusamus fugiat porro numquam expedita consequuntur quidem qui molestias repellat rem. Ex necessitatibus quod repellendus veritatis sequi mollitia debitis vel eligendi consequuntur perspiciatis est porro corporis quas sit, molestias unde adipisci velit, perferendis recusandae aliquid dicta earum. Animi quasi soluta, eius harum at accusantium maiores quas dignissimos exercitationem velit, totam inventore voluptas quidem cum praesentium! Iure eaque numquam, officiis tenetur harum eos asperiores veniam optio!</p>
      </section>
      <section id="section4" class="section2 d-flex align-center" data-aos="fade-right">
          <h1 class="titles" :class="!isDark ? '':'titles-dark'">Projetos</h1>
            <v-container>
                  <v-hover v-slot="{ hover }">
                    <v-row>
                        <v-col
                          v-for="(item, idx) in projects"
                          :key="idx"
                          cols="4"
                          @mouseover="setHovered(idx, true)"
                          @mouseleave="setHovered(idx, false)"
                        >
                          <v-card height="200">
                            <v-card-title>{{ item.name }}</v-card-title>
                            <v-expand-transition>
                                <div
                                  v-if="hover && item.hovered"
                                  class="d-flex v-card--reveal text-h4"
                                  color="purple"
                                  style="height: 100%;"
                                >
                                  <a :href="item.link" target="_blank">haha</a>
                                </div>
                            </v-expand-transition>
                          </v-card>
                        </v-col>
                    </v-row>
                  </v-hover>
            </v-container>
      </section>
    </v-container>
    <navbar />
  </v-container>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Home',
    components: {
      navbar: () => import("@/components/navbar.vue"),
      navbarHeader: () => import("@/components/navbarHeader.vue"),
    },
    data() {
      return {
        projects: [
            {
              name: "Aplicativo de clima",
              link:"https://youtube.com",
              hovered: false
            },
            {
              name: "Aplicativo de clima",
              link:"https://youtube.com",
              hovered: false
            },
            {
              name: "Aplicativo de clima",
              link:"https://youtube.com",
              hovered: false
            },
            {
              name: "Aplicativo de clima",
              link:"https://youtube.com",
              hovered: false
            },
            {
              name: "Aplicativo de clima",
              link:"https://youtube.com",
              hovered: false
            },
            {
              name: "Aplicativo de clima",
              link:"https://youtube.com",
              hovered: false
            },
            
        ]
      }
    },
    methods: {
      setHovered(idx, value) {
      this.projects[idx].hovered = value;
    },

      typeWriter(elemento) {
        const texto = elemento.innerHTML.split("");
        elemento.innerHTML = "";

        texto.forEach((letra, i) => {
          setTimeout(() => {
            elemento.innerHTML += letra
          }, 175 * i);
        });

      },

      texto() {
        const nome = document.querySelector('h1')
        this.typeWriter(nome)
      }
  },
  computed: {
      iconColor() {
        return this.$vuetify.theme.dark ? 'white' : 'black';
      },
      isDark() {
        return this.$vuetify.theme.dark ? true : false
      }
  },
  mounted() {
    this.texto()
    AOS.init()
  }

  }
</script>
<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  /* opacity: .5; */
  /* background-color: #b2a4ff82;
  backdrop-filter: blur(10px); */
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #b2a4ff82);
  position: absolute;
  width: 100%;
  height: auto;
}
.titles-dark {
  color: #B2A4FF;
  transition: 0.5s ease-in;
}
.titles {
  font-size: 70px;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
}
.titles-right {
  font-size: 70px;
  writing-mode: vertical-lr;
}
.avatar-img {
  width: 250px;
  margin-top: 10px;
  /* background-color: blueviolet; */
  filter: drop-shadow(2px 2px 2px black);
  border-radius: 50%;
}
.nomeDark {
  color: #B2A4FF;
  transition: 0.5s ease-in;
}
.nomeDark::after {
  content: "|";
  opacity: 1;
  animation: pisca 0.7s infinite;
}
.nome::after {
  content: "|";
  opacity: 1;
  animation: pisca 0.7s infinite;
}

@keyframes pisca {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.section1 {
  height: 100vh;
}
.section2 {
  margin-top: 13rem;
  height: 100vh;
}

</style>