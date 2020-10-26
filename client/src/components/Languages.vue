<template>
  <ul class="languages">
    <li v-for="item in langs" :key="item.id">
      <a
        href=""
        :data-locale="item.locale"
        :data-id="item.id"
        @click.prevent="changeLang"
        :class="{ active: item.active }"
        ><img :src="require(`@/assets/img/icons/${item.img}`)" alt=""
      /></a>
    </li>
  </ul>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  data: () => ({
		langSelected: 1,
    langs: [
      {
        id: 1,
        img: 'russia.svg',
				locale: 'ru-RU',
				active: true
      },
      {
        id: 2,
        img: 'united-kingdom.svg',
				locale: 'en-US',
				active: false
      },
      {
        id: 3,
        img: 'italysvg.svg',
				locale: 'it-IT',
				active: false
      },
      {
        id: 4,
        img: 'spain.svg',
				locale: 'es-ES',
				active: false
      }
    ]
  }),
  methods: {
    ...mapMutations(['changeLocale']),
    changeLang(e) {
      const locale = e.currentTarget.dataset.locale
      this.changeLocale(locale)
    }
	},
	computed: {
    ...mapGetters(['appLocale'])
  },
  watch: {
    appLocale() {
			this.langs.map(item => {
				item.locale === this.appLocale ? (item.active = true) : (item.active = false)
			})
    }
  }
}
</script>

<style lang="scss">
.languages {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    li {
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.25;
        transition: 0.2s;
        &.active,
        &:hover {
          opacity: 1;
        }
        img {
          width: 27px;
          height: 19px;
          object-fit: contain;
          z-index: 1;
        }
      }
    }
  }
</style>
