<template>
  <div class="service-card">
    <img
      class="service-card__icon"
      :src="require(`@/assets/img/icons/${data.icon}`)"
      alt=""
    />
    <p class="service-card__title">
      {{ data.title }}
    </p>
    <p class="service-card__text">
      {{ data.text }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    data: {
      type: Object,
      default: {
        icon: '',
        title: '',
        text: ''
      }
    }
  }
}
</script>

<style></style>
