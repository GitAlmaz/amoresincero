<template>
  <section class="content-section content-section--mans">
    <img
      src="@/assets/img/mans-couple.png"
      alt=""
      class="content-section__image"
    />
    <ContentInner>
      <template slot="text">
        <h1>{{ 'Mans_Title' | localize }}</h1>
        <h3>{{ 'Mans_Subtitle' | localize }}</h3>
        <p v-for="(item, index) of arrOfTexts" :key="index">
          {{ item }}
        </p>
      </template>
      <template slot="button">
        <button class="btn btn--gold">{{ 'Button_Connect' | localize }}</button>
      </template>
    </ContentInner>
  </section>
</template>

<script>
import ContentInner from '@/components/ContentInner'
import { mapGetters } from 'vuex'
import localizeFilter from '@/filters/localize.filter'

export default {
  name: 'Mans',
  components: {
    ContentInner
  },
  data() {
    return {
      text: '',
      arrOfTexts: []
    }
  },
  computed: {
    ...mapGetters(['appLocale'])
  },
  watch: {
    appLocale() {
      this.changeText()
    }
  },
  methods: {
    changeText() {
      this.text = localizeFilter('Mans_Text')
      const arr = this.text.split('\n').filter((item) => item != '')
      this.arrOfTexts = arr
    }
  },
  mounted() {
    this.changeText()
  }
}
</script>

<style></style>
