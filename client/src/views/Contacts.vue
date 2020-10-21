<template>
  <div class="content-section content-section--contacts">
    <h3>{{ 'Contacts_Title' | localize }}</h3>
    <div class="content-section__contacts-box">
      <div class="flex-col-5 content-section__map" id="map">
        <div v-if="mapLoading" class="content-section__loader">
          <span></span>
        </div>
        <yandex-map v-else :coords="['50.181602', '11.543889']" zoom="3">
          <ymap-marker
            marker-id="121"
            :coords="['55.776721', '37.678369']"
            :icon="marker"
          />
          <ymap-marker
            marker-id="122"
            :coords="['45.471439', '9.170047']"
            :icon="marker"
          /><ymap-marker
            marker-id="123"
            :coords="['40.501666', '-3.257983']"
            :icon="marker"
          />
        </yandex-map>
      </div>
      <div class="flex-col-5">
        <div class="contact-card">
          <h4>
            {{ 'Contacts_Italy' | localize }}
          </h4>
          <p>
            {{ 'Contacts_Italy_Address' | localize }}
          </p>
          <div class="flex-row">
            <div class="flex-col">
              <div class="flex-row">
                <a
                  v-for="link in italySocials"
                  :key="link.id"
                  :href="link.href"
                >
                  <img
                    :src="require(`@/assets/img/icons/${link.icon}`)"
                    alt=""
                  />
                </a>
              </div>
              <a href="tel:+39340000000">
                +39340000000
              </a>
            </div>
            <div class="flex-col">
              <a href="`mailto:Amoresincero1@yandex.ru`">Amoresincero1@yandex.ru</a>
            </div>
          </div>
        </div>
        <div class="contact-card">
          <h4>
            {{ 'Contacts_Russia' | localize }}
          </h4>
          <p>
            {{ 'Contacts_Russia_Address' | localize }}
          </p>
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
              <a href="tel:+79030000000">
                +7 903 000 00 00
              </a>
            </div>
            <div class="flex-col">
              <div class="flex-row">
                <a
                  v-for="link in russiaSocials.second"
                  :key="link.id"
                  :href="link.href"
                >
                  <img
                    :src="require(`@/assets/img/icons/${link.icon}`)"
                    alt=""
                  />
                </a>
              </div>
              <a href="tel:+74950000000">
                +7 495 000 00 00
              </a>
            </div>
            <div class="flex-col">
              <a href="`mailto:Amoresincero1@yandex.ru`">Amoresincero1@yandex.ru</a>
            </div>
          </div>
        </div>
        <div class="contact-card">
          <h4>
            {{ 'Contacts_Spain' | localize }}
          </h4>
          <p>
            {{ 'Contacts_Spain_Address' | localize }}
          </p>
          <div class="flex-row">
            <div class="flex-col">
              <div class="flex-row">
                <a
                  v-for="link in spainSocials"
                  :key="link.id"
                  :href="link.href"
                >
                  <img
                    :src="require(`@/assets/img/icons/${link.icon}`)"
                    alt=""
                  />
                </a>
              </div>
              <a href="tel:+34910608058">
                +34910608058
              </a>
            </div>
            <div class="flex-col">
              <a href="`mailto:Amoresincero1@yandex.ru`">Amoresincero1@yandex.ru</a>
            </div>
          </div>
        </div>
        <button class="btn btn--gold" @click.prevent="() => {toggleModal(true)}">{{ 'Button_Connect' | localize }}</button>
      </div>
    </div>
    <h1>Amore Sincero</h1>
    <h2>International Marriage Agency</h2>
  </div>
</template>

<script>
import ContactCard from '@/components/ContactCard'
import { loadYmap } from 'vue-yandex-maps'
import { mapMutations } from 'vuex'
export default {
  name: 'Contacts',
  components: {
    ContactCard
  },
  data() {
    return {
      italySocials: [
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
      spainSocials: [
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
      mapLoading: true,
      marker: {
        layout: 'default#imageWithContent',
        imageHref: 'https://image.flaticon.com/icons/svg/929/929426.svg',
        imageSize: [40, 40],
        imageOffset: [-20, -40]
      },
      ymapSettings: {
        apiKey: '58e991ff-448b-48da-a58e-4737ff0b57c1',
        lang: 'en_US',
        version: '2.1'
      }
    }
  },
  methods: {
    ...mapMutations(['toggleModal']),
    async loaderOfMap() {
      await loadYmap({...this.ymapSettings})
      this.mapLoading = false
    }
  },
  mounted() {
    this.loaderOfMap()
  }
}
</script>

<style></style>
