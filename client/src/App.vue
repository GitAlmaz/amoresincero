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
        <div v-else class="main__mobile" ref="mobileSwiper">
          <Home />
          <About />
          <Womans />
          <Mans />
          <Services />
          <Contacts />
        </div>
      </div>
      <Footer />
    </main>
  </div>
</template>

<script>
import Header from '@/components/blocks/Header'
import Footer from '@/components/blocks/Footer'
import Modal from '@/components/Modal'
import Alert from '@/components/Alert'
import { mapGetters, mapMutations } from 'vuex'
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
    maxPage: 5,
    touch: false,
    sX: 0,
    fX: 0,
    flag: true
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
      this.toPage(this.page)
    }
  },
  methods: {
    ...mapMutations(['changePage']),
    toPage(page) {
      const sections = [...this.$refs.mobileSwiper.querySelectorAll('.content-section')]
      console.log(this.windowWidth * page);
      this.$refs.mobileSwiper.style.transform = `translateX(-${this.windowWidth * page}px)`
      sections.map(i => i.classList.remove('active'))
      sections[page].classList.add('active')
    },
    swipeInit() {
      this.$refs.mobileSwiper.addEventListener('touchstart', e => this.sX = e.touches[0].clientX)
      this.$refs.mobileSwiper.addEventListener('touchend', e => this.flag = true)

      this.$refs.mobileSwiper.addEventListener('touchmove', e => {
        if (this.flag) {
          this.fX = e.touches[0].clientX
          if (this.fX - this.sX > 75) {
            if (this.page !== 0) {
              this.flag = false
              this.page--
              this.changePage(this.page)
              return false
            }
            else {
              this.flag = false
              this.page = 5
              this.$refs.mobileSwiper.style.transition = '0.3s cubic-bezier(0.000, 1.650, 0.000, 1.650)'
              this.changePage(this.page)
              setTimeout(() => {
                this.$refs.mobileSwiper.style.transition = '.2s ease-in-out'
              }, 200)
              return false
            }
          }
          if (this.sX - this.fX > 75) {
            if (this.page !== this.maxPage) {
              this.flag = false
              this.page++
              this.changePage(this.page)
              return false
            }
            else {
              this.flag = false
              this.page = 0
              this.$refs.mobileSwiper.style.transition = '0.3s cubic-bezier(0.000, 1.650, 0.000, 1.650)'
              this.changePage(this.page)
              setTimeout(() => {
                this.$refs.mobileSwiper.style.transition = '.2s ease-in-out'
              }, 200)
              return false
            }
          }
        }
      })

    }
  },
  mounted() {
    this.swipeInit()
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
.main__mobile {
  transition: .2s ease-in-out;
}
</style>
