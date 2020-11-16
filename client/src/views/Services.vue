<template>
  <section class="content-section content-section--services" id="section-services">
    <h1>{{ 'Services_Title' | localize }}</h1>
    <div class="flex-row">
      <div class="flex-col-4">
        <ServiceCard :data="relations" />
      </div>
      <div class="flex-col-4">
        <ServiceCard :data="tour" />
      </div>
    </div>
  </section>
</template>

<script>
import ServiceCard from '../components/ServiceCard'
import localizeFilter from '@/filters/localize.filter'
import { mapGetters } from 'vuex'
export default {
  name: 'Services',
  components: {
    ServiceCard
  },
  data() {
    return {
      relations: {
        icon: 'relations.png',
        title: '',
        text: ''
      },
      tour: {
        icon: 'tour.png',
        title: '',
        text: ''
      }
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
  beforeMount() {
    this.relations.title = localizeFilter('Services_Contacts')
    this.relations.text = localizeFilter('Services_Contacts_Text')
    this.tour.title = localizeFilter('Services_Tour')
    this.tour.text = localizeFilter('Services_Text')
  },
  methods: {
    changeText() {
      this.relations.title = localizeFilter('Services_Contacts')
      this.relations.text = localizeFilter('Services_Contacts_Text')
      this.tour.title = localizeFilter('Services_Tour')
      this.tour.text = localizeFilter('Services_Tour_Text')
    }
  },
  mounted() {
    this.changeText()
  }
}
</script>
