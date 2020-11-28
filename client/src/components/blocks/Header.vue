<template>
  <header class="header" :class="{ active: ddMenuOpened }">
    <div class="container">
      <div class="header__top">
        <button
          @click.prevent="
            () => {
              toggleModal(true)
            }
          "
          class="btn btn--empty"
        >
          {{ 'Header_Button' | localize }}
        </button>
        <div class="header__lang">
          <Languages />
        </div>
      </div>

      <div class="header__menu">

        <router-link to="/" class="header__logo" v-if="!mobile">
          <img src="@/assets/img/logo.png" alt="logo" />
        </router-link>
        <a href="#" class="header__logo" data-page="0" @click.prevent="toPage" v-else>
          <img src="@/assets/img/logo.png" alt="logo" />
        </a>
        <div class="header__navigation">
          <Navigation />
        </div>
        <button
          @click.prevent="
            () => {
              toggleModal(true)
            }
          "
          class="btn btn--empty"
        >
          {{ 'Header_Button' | localize }}
        </button>
        <div class="header__menu-btn" @click="triggerMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="header__dropdown">
        <div>
          <Navigation :customFunc="toggleMenu" v-if="!mobile" />
          <ul class="navigation" v-else>
            <li>
              <a href="#" data-page="1" @click.prevent="toPage">{{ 'Header_About' | localize }}</a>
            </li>
            <li>
              <a href="#" data-page="2" @click.prevent="toPage">{{ 'Header_Womans' | localize }}</a>
            </li>
            <li>
              <a href="#" data-page="3" @click.prevent="toPage">{{ 'Header_Mans' | localize }}</a>
            </li>
            <li>
              <a href="#" data-page="4" @click.prevent="toPage">{{ 'Header_Services' | localize }}</a>
            </li>
            <li>
              <a href="#" data-page="5" @click.prevent="toPage">{{ 'Header_Contacts' | localize }}</a>
            </li>
          </ul>
        </div>
        <span @click="triggerMenu"></span>
      </div>
    </div>
  </header>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import Navigation from '@/components/Navigation'
import Languages from '@/components/Languages'
export default {
  name: 'Header',
  components: {
    Navigation,
    Languages
  },
  data() {
    return {
      langSelected: 1,
      langs: [
        {
          id: 1,
          img: 'russia.svg',
          locale: 'ru-RU'
        },
        {
          id: 2,
          img: 'united-kingdom.svg',
          locale: 'en-US'
        },
        {
          id: 3,
          img: 'italysvg.svg',
          locale: 'it-IT'
        },
        {
          id: 4,
          img: 'spain.svg',
          locale: 'es-ES'
        }
      ],
      mobile: window.innerWidth < 800 ? true : false
    }
  },
  computed: {
    ...mapGetters(['ddMenuOpened'])
  },
  methods: {
    ...mapMutations(['changeLocale', 'toggleModal', 'toggleMenu', 'changePage']),
    changeLang(e) {
      const id = parseInt(e.currentTarget.dataset.id)
      const locale = e.currentTarget.dataset.locale
      this.langSelected = id
      this.changeLocale(locale)
    },
    triggerMenu(value) {
      this.toggleMenu(!this.ddMenuOpened)
    },
    toPage(e) {
      const page = +e.currentTarget.dataset.page
      this.changePage(page)
      this.toggleMenu(false)
    }
  }
}
</script>

<style></style>
