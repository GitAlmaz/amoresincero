<template>
  <div id="app" ref="app">
    <div id="app-overlay" ref="appOverlay">
      <div class="arrows prev" ref="prev">
        <img src="@/assets/img/icons/left-arrow.svg" alt="" />
      </div>
      <div class="arrows next" ref="next">
        <img src="@/assets/img/icons/right-arrow.svg" alt="" />
      </div>
    </div>
    <Modal />
    <Alert />
    <main class="main">
      <Header />
      <div class="main__content">
        <div v-if="!mobile" class="container">
          <ul class="main__pager">
            <li>
              <router-link exact-active-class="active" to="/about"
                >01</router-link
              >
            </li>
            <li>
              <router-link exact-active-class="active" to="/mans"
                >02</router-link
              >
            </li>
            <li>
              <router-link exact-active-class="active" to="/womans"
                >03</router-link
              >
            </li>
            <li>
              <router-link exact-active-class="active" to="/services"
                >04</router-link
              >
            </li>
            <li>
              <router-link exact-active-class="active" to="/contacts"
                >05</router-link
              >
            </li>
          </ul>
          <router-view />
          <ul class="main__countries">
            <li>
              <img src="@/assets/img/icons/spain-rounded.svg" alt="" />
            </li>
            <li>
              <img src="@/assets/img/icons/france.svg" alt="" />
            </li>
            <li>
              <img src="@/assets/img/icons/uk-rounded.svg" alt="" />
            </li>
            <li>
              <img src="@/assets/img/icons/russia-rounded.svg" alt="" />
            </li>
            <li>
              <img src="@/assets/img/icons/italy.svg" alt="" />
            </li>
            <li>
              <img src="@/assets/img/icons/germany.svg" alt="" />
            </li>
          </ul>
        </div>
        <div v-else class="main__mobile">
          <Home />
          <About />
          <Womans />
          <Mans />
          <Services />
          <Contacts />
        </div>
        <Footer />
      </div>
    </main>
  </div>
</template>

<script>
import Header from '@/components/blocks/Header'
import Footer from '@/components/blocks/Footer'
import Modal from '@/components/Modal'
import Alert from '@/components/Alert'
import { mapGetters } from 'vuex'
import router from './router'
import Home from '@/views/Home'
import About from '@/views/About'
import Womans from '@/views/Womans'
import Mans from '@/views/Mans'
import Services from '@/views/Services'
import Contacts from '@/views/Contacts'

export default {
  components: {
    Modal,
    Alert,
    Header,
    Footer,
    Home,
    About,
    Womans,
    Mans,
    Services,
    Contacts
  },
  data: () => ({
    mobile: window.innerWidth < 800 ? true : false,
    windowWidth: window.innerWidth,
    page: 0,
    maxPage: 5
  }),
  computed: {
    ...mapGetters(['modalOpened', 'appPage'])
  },
  watch: {
    modalOpened() {
      const $body = document.querySelector('body')
      this.modalOpened
        ? ($body.style.overflow = 'hidden')
        : ($body.style.overflow = 'auto')
    },
    appPage() {
      this.page = this.appPage
      console.log(this.page);
      document.querySelector('.main__mobile').removeEventListener('scroll', () => {
        this.swipePage()
      })
      document.querySelector('.main__mobile').scrollTo({
        left: this.windowWidth * this.page
      })
      setTimeout(() => {
        this.initSwipe()
      }, 0);
    }
  },
  methods: {
    swipePage(target) {
      const scrollLeft = target.scrollLeft
      const curPage = Math.round(scrollLeft / this.windowWidth) || 0
      if (this.page !== curPage) {
        target.scrollTo({
          left: this.windowWidth * curPage,
          behavior: 'smooth'
        })
        target.style.overflow = 'hidden'
        this.page = curPage
      } else {
        setTimeout(() => {
          target.scrollTo({
            left: this.windowWidth * curPage,
            behavior: 'smooth'
          })
          target.style.overflow = 'hidden'
          this.page = curPage
        }, 400)
      }
      setTimeout(() => {
        target.style.overflow = 'auto'
      }, 800)
    },
    initSwipe() {
      const target = document.querySelector('.main__mobile')
      target.addEventListener('scroll', () => {
        this.swipePage(target)
      })
    }
  },
  mounted() {
    this.initSwipe()
  }
}
</script>

<style lang="scss">
@import '~@/assets/styles/main.scss';
#app {
  max-height: 100vh;
  max-height: -webkit-fill-available;
  transition: 0.1s ease-out;
  &.overflow-hidden {
    overflow: hidden;
  }
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 30;
    visibility: hidden;
    transition: 0.2s;
    .arrows {
      position: absolute;
      top: 50%;
      display: block;
      width: 50px;
      height: 50px;
      opacity: 0;
      transition: 0.1s linear;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      &.prev {
        left: 5px;
      }
      &.next {
        right: 5px;
      }
    }
  }
}
</style>
