<template>
  <section class="content-section content-section--womans" id="section-womans">
    <img
      src="@/assets/img/womans-couple.png"
      alt=""
      class="content-section__image"
    />
    <ContentInner>
      <template slot="text">
        <h1>{{ 'Womans_Title' | localize }}</h1>
        <h3>{{ 'Womans_Subtitle' | localize }}</h3>
        <p v-for="(item, index) of arrOfTexts" :key="index">
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
import localizeFilter from '@/filters/localize.filter'
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Womans',
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
    ...mapMutations(['toggleModal']),
    changeText() {
      this.text = localizeFilter('Womans_Text')
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
