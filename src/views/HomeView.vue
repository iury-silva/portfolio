<template>
  <v-container class="mt-10" id="section1">
    <navbarHeader />
    <v-container class="mt-10">
      <section>
        <v-row>
          <v-col
            cols="12"
            lg="4"
            xs="1"
            sm="2"
            md="2"
            justify="center"
            class="icons-side d-flex flex-column text-center my-auto"
          >
            <v-btn
              v-for="(icon, idx) in icons"
              :key="idx"
              icon
              plain
              :ripple="false"
              :href="icon.link"
              target="_blank"
            >
              <svg
                class="mb-2"
                :class="!isDark ? 'icons' : 'icons-dark'"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="30"
                height="30"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path :d="icon.icon_path" :fill="iconColor" />
              </svg>
            </v-btn>
          </v-col>
          <v-col
            cols="12"
            lg="4"
            md="8"
            sm="8"
            xs="4"
            justify="center"
            align="center"
            class="back mb-5"
          >
            <p class="subtitle-1 mb-0">{{ $t("hello") }}</p>
            <h1 :class="!isDark ? 'nome font-weight-black' : 'nomeDark'">
              Iury da Silva
            </h1>
            <p class="subtitle-1 mb-10">{{ $t("role") }}</p>
            <img
              src="@/assets/image-removebg-preview.png"
              class="avatar-img mb-10"
            />
            <v-col class="mt-10">
              <v-btn
                rounded
                class="mr-1"
                :class="!isDark ? 'icons' : 'icons-dark'"
                outlined
                target="_blank"
                href="https://github.com/iury-silva"
                >Github
                <svg
                  class="ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"
                    :fill="iconColor"
                  /></svg
              ></v-btn>
              <v-btn plain rounded>{{ $t("about") }}</v-btn>
            </v-col>
          </v-col>
          <v-col
            cols="12"
            lg="4"
            md="2"
            sm="2"
            xs="4"
            justify="center"
            align="center"
            class="icons-side text-center my-auto"
          >
            <p class="scroll-text">
              | {{ $t("scroll") }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M11.141 4c-1.582 0-2.387.169-3.128.565a3.453 3.453 0 0 0-1.448 1.448C6.169 6.753 6 7.559 6 9.14v5.718c0 1.582.169 2.387.565 3.128.337.63.818 1.111 1.448 1.448.74.396 1.546.565 3.128.565h1.718c1.582 0 2.387-.169 3.128-.565a3.453 3.453 0 0 0 1.448-1.448c.396-.74.565-1.546.565-3.128V9.14c0-1.582-.169-2.387-.565-3.128a3.453 3.453 0 0 0-1.448-1.448C15.247 4.169 14.441 4 12.86 4H11.14zm0-2h1.718c2.014 0 3.094.278 4.072.801a5.452 5.452 0 0 1 2.268 2.268c.523.978.801 2.058.801 4.072v5.718c0 2.014-.278 3.094-.801 4.072a5.452 5.452 0 0 1-2.268 2.268c-.978.523-2.058.801-4.072.801H11.14c-2.014 0-3.094-.278-4.072-.801a5.452 5.452 0 0 1-2.268-2.268C4.278 17.953 4 16.873 4 14.859V9.14c0-2.014.278-3.094.801-4.072A5.452 5.452 0 0 1 7.07 2.801C8.047 2.278 9.127 2 11.141 2zM11 6h2v5h-2V6z"
                  :fill="iconColor"
                />
              </svg>
              |
            </p>
          </v-col>
        </v-row>
      </section>
      <div id="section2"></div>
      <section
        id="section2"
        class="section2 d-flex align-center fill-height"
        data-aos="fade-right"
      >
        <h1
          class="titles d-flex justify-center mb-5 absolute"
          :class="!isDark ? '' : 'titles-dark'"
        >
          {{ $t("about") }}
        </h1>
        <p class="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          doloremque similique sed quae omnis accusamus minima facilis adipisci
          velit architecto harum, dicta animi minus rem cumque quos fugit amet
          modi repudiandae delectus, recusandae magni optio blanditiis earum.
          Eaque, modi. Eveniet nisi dolores consequatur alias quas laboriosam
          saepe dolore, earum, blanditiis amet ipsam? Minima suscipit voluptas,
          laboriosam, facilis omnis id repudiandae deleniti accusantium tenetur,
          exercitationem obcaecati soluta ut laudantium. Doloremque deserunt
          commodi ducimus iusto quis veniam molestiae corrupti, consectetur,
          perferendis itaque sint voluptates fugiat aut. Laboriosam quaerat
          corporis illum blanditiis, aperiam pariatur optio ea suscipit est
          nostrum, sint cumque necessitatibus! Iste officiis, ratione provident
          repellendus reprehenderit perspiciatis voluptatibus reiciendis eveniet
          expedita repellat ex atque vel voluptates architecto suscipit.
          Voluptatum, accusantium sequi repellendus culpa molestias tenetur eos
          sit. Laboriosam sed provident tenetur delectus est voluptatem dolorem
          quos pariatur, corporis sunt rem neque quisquam placeat nihil itaque
          illum inventore adipisci architecto a culpa ad quis minima blanditiis
          quas? Impedit quasi quod incidunt optio sint animi debitis, officia
          sit sed assumenda maxime quas nostrum dolorum consequuntur? Sequi, a
          assumenda ipsum natus inventore dignissimos tempore illum aspernatur?
          Explicabo cupiditate vitae id commodi? Iusto quos exercitationem
          facilis impedit laboriosam iste sequi possimus tempora recusandae a
          eos, iure reprehenderit, provident, minus doloremque sint totam
          corrupti asperiores tempore itaque. Atque aliquid laboriosam possimus
          ad, sequi porro reiciendis temporibus quaerat sapiente dignissimos
          nobis! A corporis aspernatur maxime similique harum doloremque, omnis
          nulla dolores neque, accusamus fugiat porro numquam expedita
          consequuntur quidem qui molestias repellat rem. Ex necessitatibus quod
          repellendus veritatis sequi mollitia debitis vel eligendi consequuntur
          perspiciatis est porro corporis quas sit, molestias unde adipisci
          velit, perferendis recusandae aliquid dicta earum. Animi quasi soluta,
          eius harum at accusantium maiores quas dignissimos exercitationem
          velit, totam inventore voluptas quidem cum praesentium! Iure eaque
          numquam, officiis tenetur harum eos asperiores veniam optio!
        </p>
      </section>
      <div id="section3"></div>
      <section
        id="section3"
        class="section2 d-flex align-center fill-height"
        data-aos="fade-right"
        :class="
          $vuetify.breakpoint.lgAndUp ||
          $vuetify.breakpoint.mdAndUp ||
          $vuetify.breakpoint.smAndUp
            ? 'flex-row-reverse'
            : ''
        "
      >
        <h1
          class="titles-right d-flex justify-center mb-5"
          :class="!isDark ? '' : 'titles-dark'"
        >
          {{ $t("skills") }}
        </h1>
        <p class="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          doloremque similique sed quae omnis accusamus minima facilis adipisci
          velit architecto harum, dicta animi minus rem cumque quos fugit amet
          modi repudiandae delectus, recusandae magni optio blanditiis earum.
          Eaque, modi. Eveniet nisi dolores consequatur alias quas laboriosam
          saepe dolore, earum, blanditiis amet ipsam? Minima suscipit voluptas,
          laboriosam, facilis omnis id repudiandae deleniti accusantium tenetur,
          exercitationem obcaecati soluta ut laudantium. Doloremque deserunt
          commodi ducimus iusto quis veniam molestiae corrupti, consectetur,
          perferendis itaque sint voluptates fugiat aut. Laboriosam quaerat
          corporis illum blanditiis, aperiam pariatur optio ea suscipit est
          nostrum, sint cumque necessitatibus! Iste officiis, ratione provident
          repellendus reprehenderit perspiciatis voluptatibus reiciendis eveniet
          expedita repellat ex atque vel voluptates architecto suscipit.
          Voluptatum, accusantium sequi repellendus culpa molestias tenetur eos
          sit. Laboriosam sed provident tenetur delectus est voluptatem dolorem
          quos pariatur, corporis sunt rem neque quisquam placeat nihil itaque
          illum inventore adipisci architecto a culpa ad quis minima blanditiis
          quas? Impedit quasi quod incidunt optio sint animi debitis, officia
          sit sed assumenda maxime quas nostrum dolorum consequuntur? Sequi, a
          assumenda ipsum natus inventore dignissimos tempore illum aspernatur?
          Explicabo cupiditate vitae id commodi? Iusto quos exercitationem
          facilis impedit laboriosam iste sequi possimus tempora recusandae a
          eos, iure reprehenderit, provident, minus doloremque sint totam
          corrupti asperiores tempore itaque. Atque aliquid laboriosam possimus
          ad, sequi porro reiciendis temporibus quaerat sapiente dignissimos
          nobis! A corporis aspernatur maxime similique harum doloremque, omnis
          nulla dolores neque, accusamus fugiat porro numquam expedita
          consequuntur quidem qui molestias repellat rem. Ex necessitatibus quod
          repellendus veritatis sequi mollitia debitis vel eligendi consequuntur
          perspiciatis est porro corporis quas sit, molestias unde adipisci
          velit, perferendis recusandae aliquid dicta earum. Animi quasi soluta,
          eius harum at accusantium maiores quas dignissimos exercitationem
          velit, totam inventore voluptas quidem cum praesentium! Iure eaque
          numquam, officiis tenetur harum eos asperiores veniam optio!
        </p>
      </section>
      <div id="section4"></div>
      <section
        id="section4"
        class="section2 d-flex align-center fill-height mb-10"
        data-aos="fade-right"
      >
        <h1 class="titles" :class="!isDark ? '' : 'titles-dark'">
          {{ $t("projects") }}
        </h1>
        <v-container>
          <v-hover v-slot="{ hover }">
            <v-row>
              <v-col
                v-for="(item, idx) in projects"
                :key="idx"
                cols="12"
                sm="6"
                md="4"
                lg="4"
                @mouseover="setHovered(idx, true)"
                @mouseleave="setHovered(idx, false)"
              >
                <v-card height="200">
                  <v-card-title class="content-card">{{
                    $t(item.name)
                  }}</v-card-title>
                  <v-expand-transition>
                    <div
                      v-if="hover && item.hovered"
                      class="d-flex text-h4"
                      :class="
                        !isDark ? 'v-card--reveal' : 'v-card--reveal-dark'
                      "
                      style="height: 100%"
                    >
                      <v-btn
                        icon
                        class="mx-auto icons"
                        :href="item.link"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path
                            d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
                            :fill="iconColor"
                          />
                        </svg>
                      </v-btn>
                      <!-- <a :href="item.link" target="_blank">haha</a> -->
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
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {
    navbar: () => import("@/components/navbar.vue"),
    navbarHeader: () => import("@/components/navbarHeader.vue"),
  },
  data() {
    return {
      projects: [
        {
          name: "projects",
          link: "https://youtube.com",
          hovered: false,
        },
        {
          name: "projects",
          link: "https://youtube.com",
          hovered: false,
        },
        {
          name: "projects",
          link: "https://youtube.com",
          hovered: false,
        },
        {
          name: "projects",
          link: "https://youtube.com",
          hovered: false,
        },
        {
          name: "projects",
          link: "https://youtube.com",
          hovered: false,
        },
        {
          name: "projects",
          link: "https://youtube.com",
          hovered: false,
        },
      ],
      icons: [
        {
          icon_path:
            "M2.004 22l1.352-4.968A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 0 0-.371.1 1.293 1.293 0 0 0-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 0 0 6.9 9.62c.002.49.13.967.33 1.413.409.902 1.082 1.857 1.971 2.742.214.213.423.427.648.626a9.448 9.448 0 0 0 3.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 0 0 .833-.231c.166-.088.244-.132.383-.22 0 0 .043-.028.125-.09.135-.1.218-.171.33-.288.083-.086.155-.187.21-.302.078-.163.156-.474.188-.733.024-.198.017-.306.014-.373-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 0 0-.177-.041.482.482 0 0 0-.378.127v-.002c-.005 0-.072.057-.795.933a.35.35 0 0 1-.368.13 1.416 1.416 0 0 1-.191-.066c-.124-.052-.167-.072-.252-.109l-.005-.002a6.01 6.01 0 0 1-1.57-1c-.126-.11-.243-.23-.363-.346a6.296 6.296 0 0 1-1.02-1.268l-.059-.095a.923.923 0 0 1-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41a4.38 4.38 0 0 0 .263-.373c.118-.19.155-.385.093-.536-.28-.684-.57-1.365-.868-2.041-.059-.134-.234-.23-.393-.249-.054-.006-.108-.012-.162-.016a3.385 3.385 0 0 0-.403.004z",
          link: "https://wa.me/5551998619910",
        },
        {
          icon_path:
            "M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 0 1-1.548-1.549 1.548 1.548 0 1 1 1.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z",
          link: "https://www.linkedin.com/in/iury-da-silva-670256234/",
        },
        {
          icon_path:
            "M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z",
          link: "https://github.com/iury-silva",
        },
      ],
    };
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
          elemento.innerHTML += letra;
        }, 175 * i);
      });
    },

    texto() {
      const nome = document.querySelector("h1");
      this.typeWriter(nome);
    },
  },
  computed: {
    iconColor() {
      return this.$vuetify.theme.dark ? "white" : "black";
    },
    isDark() {
      return this.$vuetify.theme.dark ? true : false;
    },
  },
  mounted() {
    this.texto();
    AOS.init();
  },
};
</script>
<style scoped>
.icons {
  cursor: pointer;
  transition: 0.5s ease-in-out;
}
.icons-dark {
  cursor: pointer;
  transition: 0.5s ease-in-out;
}
.icons:hover {
  /* box-shadow: 10px 10px 10px white; */
  filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.375));
}
.icons-dark:hover {
  filter: drop-shadow(0px 0px 15px rgba(255, 255, 255, 0.493));
}
.scroll-text {
  writing-mode: vertical-lr;
  float: right;
  animation: float 5s ease-in-out infinite;
}
@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-20px);
  }
  100% {
    transform: translatey(0px);
  }
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  /* opacity: .5; */
  /* background-color: #b2a4ff82;*/
  backdrop-filter: blur(10px);
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    #a09fa782
  );
  position: absolute;
  width: 100%;
  height: auto;
}
.v-card--reveal-dark {
  align-items: center;
  bottom: 0;
  justify-content: center;
  /* opacity: .5; */
  /* background-color: #b2a4ff82;*/
  backdrop-filter: blur(10px);
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #b2a4ff);
  position: absolute;
  width: 100%;
  height: auto;
}
.titles-dark {
  color: #b2a4ff;
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
  display: flex;
  justify-content: center;
  align-content: center;
  max-width: 250px;
  width: auto;
  margin-top: 10px;
  /* background-color: blueviolet; */
  filter: drop-shadow(2px 2px 2px black);
  border-radius: 50%;
}
.nomeDark {
  color: #b2a4ff;
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
  0%,
  100% {
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
  margin-top: 10rem;
  /* margin-bottom: 13rem; */
  /* height: 100vh; */
}
.content-card {
  word-break: initial;
}
@media (max-width: 600px) {
  :not(.vuetify-rtl) .v-row--reverse {
    flex-direction: row !important;
  }
  .titles,
  .titles-right {
    font-size: 40px;
    writing-mode: unset;
    transform: rotate(360deg);
  }
  .section2 {
    display: flex;
    flex-direction: column;
  }
  .back {
    position: relative;
  }
  .icons-side {
    position: absolute;
    top: 250px;
    right: 2px;
  }
  /* .avatar-img {
    width: 150px;
  } */
}
</style>
