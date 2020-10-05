<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__navigation">
        <Navigation />
      </div>
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
export default {
  name: 'Footer',
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
      }
    }
  },
  methods: {
    ...mapMutations(['changeLocale']),
    changeLang(e) {
      const id = parseInt(e.currentTarget.dataset.id)
      const locale = e.currentTarget.dataset.locale
      this.langSelected = id
      this.changeLocale(locale)
    }
  }
}
</script>

<style lang="scss">
.footer {
	width: 100vw;
	display: none;
  z-index: 10;
  position: relative;
  padding: 15px 0;
  background: rgba(0, 0, 0, 0.35);
	@media (max-width: 800px) {
		display: block;
	}
  &.disabled {
    display: none;
  }
  .container {
    flex-wrap: wrap;
    align-items: flex-start !important;
  }
  &__navigation {
    width: 65%;
    margin-bottom: 15px;
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
  &__contact {
    width: 100%;
    display: flex;
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
