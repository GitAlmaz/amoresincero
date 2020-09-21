<template>
  <header class="header" :class="{ active: ddMenuOpened }">
    <div class="container">
      <div class="header__top">
        <button @click.prevent="() => {toggleModal(true)}" class="btn btn--empty">
          {{ 'Header_Button' | localize }}
        </button>
        <ul class="header__lang">
          <li v-for="item in langs" :key="item.id">
            <a
              href=""
              :data-locale="item.locale"
              :data-id="item.id"
              @click.prevent="changeLang"
              :class="{ active: item.id === langSelected }"
              ><img :src="require(`@/assets/img/icons/${item.img}`)" alt=""
            /></a>
          </li>
        </ul>
      </div>

      <div class="header__menu">
        <router-link to="/" class="header__logo">
          <img src="@/assets/img/logo.png" alt="logo" />
          <img src="@/assets/img/logo_small.png" alt="logo" />
        </router-link>
        <div class="header__navigation">
          <Navigation />
        </div>
        <button @click.prevent="() => {toggleModal(true)}" class="btn btn--empty">
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
          <Navigation :customFunc="toggleMenu" />
        </div>
        <span @click="triggerMenu"></span>
      </div>
    </div>
  </header>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import Navigation from '@/components/Navigation'
export default {
  name: 'Header',
  components: {
    Navigation
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
      ]
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
    }
  }
}
</script>

<style></style>
