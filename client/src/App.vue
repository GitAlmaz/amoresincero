<template>
  <div id="app" :class="hidden && 'overflow-hidden'" ref="app">
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
        <div class="container">
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
export default {
  components: {
    Modal,
    Alert,
    Header,
    Footer
  },
  data: () => ({
    hidden: false,
    tDiff: 0,
    tStart: 0,
    tEnd: 0,
    tMove: 0,
    prevPage: '',
    nextPage: '',
    startDis: 50,
    endDis: 150
  }),
  computed: {
    ...mapGetters(['modalOpened'])
  },
  watch: {
    modalOpened() {
      const $body = document.querySelector('body')
      this.modalOpened
        ? ($body.style.overflow = 'hidden')
        : ($body.style.overflow = 'auto')
    }
  },
  methods: {
    slidePage() {
      const findDiff = (start, current) => (this.tDiff = current - start)
      const overlay = flag => {
        if (flag) {
          this.$refs.appOverlay.style.visibility = 'visible'
        } else {
          this.$refs.appOverlay.style.visibility = 'hidden'
        }
      }
      const appMove = px => {
        this.$refs.app.style.transform = `translateX(${px / 10}px)`
      }
      const changePages = hash => {
        switch (hash) {
          case '#/':
            this.prevPage = '/contacts'
            this.nextPage = '/about'
            break
          case '#/about':
            this.prevPage = '/'
            this.nextPage = '/mans'
            break
          case '#/mans':
            this.prevPage = '/about'
            this.nextPage = '/womans'
            break
          case '#/womans':
            this.prevPage = '/mans'
            this.nextPage = '/services'
            break
          case '#/services':
            this.prevPage = '/womans'
            this.nextPage = '/contacts'
            break
          case '#/contacts':
            this.prevPage = '/services'
            this.nextPage = '/'
            break
        }
      }
      window.addEventListener('touchstart', evt => {
        this.tStart = evt.touches[0].clientX
      })
      window.addEventListener('touchmove', evt => {
        this.tMove = evt.touches[0].clientX
        findDiff(this.tStart, this.tMove)
        if (this.tDiff > this.startDis || this.tDiff < -this.startDis) {
          this.hidden = true
          overlay(true)
          // appMove(this.tDiff)
          changePages(window.location.hash)
        }
        if (this.tDiff > this.startDis) {
          this.$refs.prev.style.opacity = `${this.tDiff / this.startDis - 1}`
          this.$refs.prev.style.transform = `scale(${this.tDiff /
            this.startDis}) translateX(${this.tDiff / 10}px)`
        }
        if (this.tDiff < -this.startDis) {
          this.$refs.next.style.opacity = `${-this.tDiff / this.startDis - 1}`
          this.$refs.next.style.transform = `scale(${-this.tDiff /
            this.startDis}) translateX(-${-this.tDiff / 10}px)`
        }
        if (this.tDiff > this.endDis) {
          router.push({ path: this.prevPage })
        } else if (this.tDiff < -this.endDis) {
          router.push({ path: this.nextPage })
        }
      })
      window.addEventListener('touchend', evt => {
        this.hidden = false
        this.tStart = 0
        this.tMove = 0
        // appMove(0)
        overlay(false)
        this.$refs.prev.style.opacity = '0'
        this.$refs.prev.style.transform = `scale(1) translateX(0)`
        this.$refs.next.style.opacity = '0'
        this.$refs.next.style.transform = `scale(1) translateX(0)`
      })
      router.beforeEach((to, from, next) => {
        this.hidden = false
        // appMove(0)
        overlay(false)
        this.$refs.prev.style.opacity = '0'
        this.$refs.prev.style.transform = `scale(1) translateX(0)`
        this.$refs.next.style.opacity = '0'
        this.$refs.next.style.transform = `scale(1) translateX(0)`
        next()
      })
    }
  },
  mounted() {
    this.slidePage()
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
.intersection {
  position: absolute;
  left: 0;
  width: 100vw;
  height: 10px;
  background: transparent;
  &_viewer {
    position: fixed;
    bottom: 0;
    height: 10px;
    width: 100vw;
    background: transparent;
  }
  &_top {
    top: -15px;
  }
  &_bottom {
    bottom: -15px;
  }
}
</style>
