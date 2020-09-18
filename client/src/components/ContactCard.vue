<template>
  <div class="contact-card">
    <h4>
      {{ data.country }}
    </h4>
    <p>
      {{ data.address }}
    </p>
    <div class="flex-row">
      <div class="flex-col" v-for="phone in data.phones" :key="phone.id">
        <div class="flex-row">
          <a v-for="link in phone.links" :key="link.id" :href="link.href">
            <img :src="require(`@/assets/img/icons/${link.icon}`)" alt="" />
          </a>
        </div>
        <a :href="`tel:${phone.number.replace(/\s/g, '')}`">{{
          phone.number
        }}</a>
      </div>
      <div class="flex-col">
        <a :href="`mailto:${data.mail}`">{{ data.mail }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactCard',
  props: {
    data: {
      type: Object,
      default: {
        country: 'Country',
        address: 'address',
        mail: 'mail@gmail.com',
        phones: [
          {
            id: 1,
            number: '+7 777 777 77 77',
            links: [
              {
                id: 1,
                icon: '',
                href: ''
              }
            ]
          }
        ]
      }
    }
  }
}
</script>

<style></style>
