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
        <a href="#section-home" class="header__logo" @click.prevent="smoothScroll" v-else>
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
              <a href="#section-about" @click.prevent="smoothScroll">{{ 'Header_About' | localize }}</a>
            </li>
            <li>
              <a href="#section-mans" @click.prevent="smoothScroll">{{ 'Header_Mans' | localize }}</a>
            </li>
            <li>
              <a href="#section-womans" @click.prevent="smoothScroll">{{ 'Header_Womans' | localize }}</a>
            </li>
            <li>
              <a href="#section-services" @click.prevent="smoothScroll">{{ 'Header_Services' | localize }}</a>
            </li>
            <li>
              <a href="#section-contacts" @click.prevent="smoothScroll">{{ 'Header_Contacts' | localize }}</a>
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
    ...mapMutations(['changeLocale', 'toggleModal', 'toggleMenu']),
    changeLang(e) {
      const id = parseInt(e.currentTarget.dataset.id)
      const locale = e.currentTarget.dataset.locale
      this.langSelected = id
      this.changeLocale(locale)
    },
    triggerMenu(value) {
      this.toggleMenu(!this.ddMenuOpened)
    },
    smoothScroll(e) {
      const scrollTo = e.currentTarget.getAttribute('href')
      const fromTop = document.querySelector(scrollTo).getBoundingClientRect().top
      const main = document.querySelector('.main')
      main.scrollBy({
        top: fromTop - 100,
        behavior: 'smooth'
      })
      this.toggleMenu(false)
    }
  }
}
</script>

<style></style>
