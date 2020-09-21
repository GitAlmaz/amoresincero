<template>
  <div class="modal" v-if="modalOpened" :class="{ 'modal--closing': closing }">
    <span class="modal__overlay" @click="closeModal"></span>
    <form class="modal__form" @submit.prevent="sendFormAjax">
      <div class="modal__container">
        <a href="" class="modal__close" @click.prevent="closeModal">
          <img src="@/assets/img/icons/close.svg" alt="" />
        </a>
        <h5>{{ 'Modal_Title' | localize }}</h5>
        <p class="modal__label">{{ 'Modal_PersonalData' | localize }}</p>
        <div class="modal__input" v-for="input in inputs" :key="input.id">
          <input
            required
            type="text"
            placeholder=" "
            :name="input.id"
            :id="input.id"
            v-model="form[input.id]"
          />
          <label :for="input.id">{{ input.label }}</label>
        </div>
        <p class="modal__label">{{ 'Modal_PinnedPhotos' | localize }}</p>
        <div class="modal__pinned-photos">
          <input
            type="file"
            name="photos"
            id="photos"
            multiple
            accept="image/*"
            @input="loadImg"
          />
          <label for="photos"
            ><img src="@/assets/img/icons/add.svg" alt=""
          /></label>
          <div class="out" ref="photosOut"></div>
        </div>
        <button class="btn btn--gold">
          {{ 'Button_Send' | localize }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import localizeFiter from '@/filters/localize.filter.js'
export default {
  name: 'modal',
  data() {
    return {
      closing: false,
      inputs: [
        {
          id: 'name',
          label: localizeFiter('Modal_Input_Name')
        },
        {
          id: 'birthday',
          label: localizeFiter('Modal_Input_Birthday')
        },
        {
          id: 'birth_location',
          label: localizeFiter('Modal_Input_BirthLocation')
        },
        {
          id: 'citizenship',
          label: localizeFiter('Modal_Input_Citizenship')
        },
        {
          id: 'place_of_live',
          label: localizeFiter('Modal_Input_PlaceOfLive')
        },
        {
          id: 'contact_number',
          label: localizeFiter('Modal_Input_ContactNumber')
        },
        {
          id: 'email',
          label: localizeFiter('Modal_Input_Email')
        },
        {
          id: 'height_weight',
          label: localizeFiter('Modal_Input_HeightWeight')
        }
      ],
      form: {
        name: '',
        birthday: '',
        birth_location: '',
        citizenship: '',
        place_of_live: '',
        contact_number: '',
        email: '',
        height_weight: '',
        photos: []
      }
    }
  },
  computed: {
    ...mapGetters(['modalOpened', 'appLocale'])
  },
  watch: {
    appLocale() {
      this.inputs = [
        {
          id: 'name',
          label: localizeFiter('Modal_Input_Name')
        },
        {
          id: 'birthday',
          label: localizeFiter('Modal_Input_Birthday')
        },
        {
          id: 'birth_location',
          label: localizeFiter('Modal_Input_BirthLocation')
        },
        {
          id: 'citizenship',
          label: localizeFiter('Modal_Input_Citizenship')
        },
        {
          id: 'place_of_live',
          label: localizeFiter('Modal_Input_PlaceOfLive')
        },
        {
          id: 'contact_number',
          label: localizeFiter('Modal_Input_ContactNumber')
        },
        {
          id: 'email',
          label: localizeFiter('Modal_Input_Email')
        },
        {
          id: 'height_weight',
          label: localizeFiter('Modal_Input_HeightWeight')
        }
      ]
    }
  },
  methods: {
    ...mapMutations(['toggleModal', 'toggleAlert']),
    closeModal() {
      this.closing = true
      setTimeout(() => {
        this.closing = false
        this.toggleModal(false)
      }, 400)
    },
    loadImg(e) {
      const files = [...e.currentTarget.files]
      if (files.length && files.length < 3) {
        this.$refs.photosOut.innerHTML = ''
        files.map(file => {
          const FR = new FileReader()
          FR.addEventListener('load', () => {
            const img = `<img src="${FR.result}" />`
            this.$refs.photosOut.insertAdjacentHTML('beforeend', img)
            const base64 = FR.result.replace('data:image/jpeg;base64,', '')
            if (!this.form.photos.includes(FR.result)) {
              this.form.photos.push(FR.result)
            }
          })
          FR.readAsDataURL(file)
        })
      }
    },
    async sendFormAjax(e) {
      try {
        e.target.querySelector('button').disabled = true
        const res = await fetch('/mail.php', {
          method: 'POST',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.form)
        })
        if (res.status === 200) {
          this.form = {
            name: '',
            birthday: '',
            birth_location: '',
            citizenship: '',
            place_of_live: '',
            contact_number: '',
            email: '',
            height_weight: '',
            photos: []
          }
          this.toggleAlert(true)
          this.closing = true
          setTimeout(() => {
            this.toggleAlert(false)
            this.closeModal()
          }, 1500)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style></style>
