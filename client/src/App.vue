<template>
  <div id="app" :class="hidden && 'overflow-hidden'">
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
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Header from '@/components/blocks/Header'
import Modal from '@/components/Modal'
import Alert from '@/components/Alert'
import { mapGetters } from 'vuex'
export default {
  components: {
    Modal,
    Alert,
    Header
  },
  data: () => ({
    hidden: false
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
  }
}
</script>

<style lang="scss">
@import '~@/assets/styles/main.scss';
#app {
  max-height: 100vh;
  max-height: -webkit-fill-available;
  &.overflow-hidden {
    overflow: hidden;
  }
}
</style>
