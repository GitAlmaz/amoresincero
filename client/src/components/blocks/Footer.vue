<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__copyright">
        Брачное агентство "Amore Sincero" ©2015-2020. Все права защищены.
      </div>
      <div class="footer__navigation">
        <Navigation v-if="!mobile" />
        <ul class="navigation" v-else>
          <li>
            <a href="#" data-page="1" @click.prevent="toPage">{{
              'Header_About' | localize
            }}</a>
          </li>
          <li>
            <a href="#" data-page="2" @click.prevent="toPage">{{
              'Header_Womans' | localize
            }}</a>
          </li>
          <li>
            <a href="#" data-page="3" @click.prevent="toPage">{{
              'Header_Mans' | localize
            }}</a>
          </li>
          <li>
            <a href="#" data-page="4" @click.prevent="toPage">{{
              'Header_Services' | localize
            }}</a>
          </li>
          <li>
            <a href="#" data-page="5" @click.prevent="toPage">{{
              'Header_Contacts' | localize
            }}</a>
          </li>
        </ul>
      </div>
      <div class="footer__lang">
        <Languages />
      </div>
      <div class="footer__contact">
        <div class="contact-card">
          <div class="flex-row">
            <div class="flex-col">
              <div class="flex-row">
                <a
                  v-for="link in russiaSocials.first"
                  :key="link.id"
                  :href="link.href"
                >
                  <img
                    :src="require(`@/assets/img/icons/${link.icon}`)"
                    alt=""
                  />
                </a>
              </div>
              <a href="tel:+79030000000">+7 903 000 00 00</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import Navigation from '@/components/Navigation'
import Languages from '@/components/Languages'
export default {
  name: 'Footer',
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
      russiaSocials: {
        first: [
          {
            id: 1,
            icon: 'telegram.svg',
            href: ''
          },
          {
            id: 2,
            icon: 'viber.svg',
            href: ''
          },
          {
            id: 3,
            icon: 'whatsapp.svg',
            href: ''
          }
        ],
        second: [
          {
            id: 1,
            icon: 'telegram.svg',
            href: ''
          },
          {
            id: 2,
            icon: 'whatsapp.svg',
            href: ''
          }
        ]
      },
      mobile: window.innerWidth < 800 ? true : false
    }
  },
  methods: {
    ...mapMutations(['changeLocale', 'changePage']),
    changeLang(e) {
      const id = parseInt(e.currentTarget.dataset.id)
      const locale = e.currentTarget.dataset.locale
      this.langSelected = id
      this.changeLocale(locale)
    },
    toPage(e) {
      const page = +e.currentTarget.dataset.page
      this.changePage(page)
    }
  }
}
</script>

<style lang="scss">
.footer {
  width: 100vw;
  display: block;
  z-index: 10;
  padding: 5px 0;
  background: rgba(0, 0, 0, 0.35);
  position: fixed;
  bottom: 0;
  left: 0;
  backdrop-filter: blur(15px);
  @media (max-width: 800px) {
    position: relative;
    display: block;
  }
  &.disabled {
    display: none;
  }
  .container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center !important;
    @media (max-width: 800px) {
      align-items: flex-start !important;
    }
  }
  &__copyright {
    font-size: 14px;
    color: #dddddd;
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
    order: 1;
  }
  &__navigation {
    width: 65%;
    margin-bottom: 15px;
    display: none;
    @media (max-width: 800px) {
      display: block;
    }
    .navigation {
      width: 100%;
      flex-direction: row !important;
      flex-wrap: wrap;
      align-items: flex-start !important;
      li {
        width: auto !important;
        &:not(:last-child) {
          margin-bottom: 5px;
          margin-right: 10px !important;
        }
        a {
          border: none !important;
          padding: 0;
          justify-content: flex-start !important;
          opacity: 0.5;

          &.active {
            border: none !important;
            background: transparent !important;
            opacity: 1;
          }
        }
      }
    }
  }
  &__lang {
    display: none;
    @media (max-width: 800px) {
      display: flex;
    }
  }
  &__contact {
    display: flex;
    @media (max-width: 800px) {
      width: 100%;
      display: flex;
    }
    .contact-card {
      .flex-col {
        width: 100% !important;
        flex-direction: row-reverse;
        align-items: center;
        .flex-row {
          margin-left: 15px;
          img {
            width: 20px;
            height: 20px;
          }
        }
      }
      .flex-row {
        width: auto;
      }
    }
  }
}
</style>
