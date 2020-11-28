<template>
  <section class="content-section content-section--about" id="section-about">
    <img
      src="@/assets/img/about-couple.png"
      alt=""
      class="content-section__image"
    />
    <ContentInner>
      <template slot="text">
        <h1>{{ 'About_Title' | localize }}</h1>
        <h3>{{ 'About_Subtitle1' | localize }}</h3>
        <p v-for="(item, index) of arrOfTexts_one" :key="index">
          {{ item }}
        </p>
        <h3>{{ 'About_Subtitle2' | localize }}</h3>
        <p v-for="(item, index) of arrOfTexts_two" :key="index">
          {{ item }}
        </p>
      </template>
      <template slot="button">
        <button class="btn btn--gold" @click.prevent="() => {toggleModal(true)}">{{ 'Button_Connect' | localize }}</button>
      </template>
    </ContentInner>
  </section>
</template>

<script>
import ContentInner from '@/components/ContentInner'
import { mapGetters, mapMutations } from 'vuex'
import localizeFilter from '@/filters/localize.filter'
export default {
  name: 'About',
  components: {
    ContentInner
  },
  data() {
    return {
      text: '',
      arrOfTexts_one: [],
      arrOfTexts_two: [],
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
    ...mapMutations(['toggleModal']),
    changeText() {
      this.arrOfTexts_one = []
      this.arrOfTexts_two = []
      this.text = localizeFilter('About_Text')
      const arr = this.text.split('\n').filter(item => item != '')
      for (let i = 0; i < arr.length; i++) {
        i < 2 ? this.arrOfTexts_one.push(arr[i]) : this.arrOfTexts_two.push(arr[i])
      }
    }
  },
  mounted() {
    this.changeText()
  }
}
</script>
