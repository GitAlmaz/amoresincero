<template>
  <ul class="navigation">
    <li>
      <router-link @click.native="closeMenu" exact-active-class="active" to="/about">
        {{  'Header_About' | localize}}
      </router-link>
    </li>
    <li>
      <router-link @click.native="closeMenu" exact-active-class="active" to="/mans">{{
        'Header_Mans' | localize
      }}</router-link>
    </li>
    <li>
      <router-link
        @click.native="closeMenu"
        exact-active-class="active"
        to="/womans"
        >{{ 'Header_Womans' | localize }}</router-link
      >
    </li>
    <li>
      <router-link
        @click.native="closeMenu"
        exact-active-class="active"
        to="/services"
        >{{ 'Header_Services' | localize }}</router-link
      >
    </li>
    <li>
      <router-link
        @click.native="closeMenu"
        exact-active-class="active"
        to="/contacts"
        >{{ 'Header_Contacts' | localize }}</router-link
      >
    </li>
  </ul>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'navigation',
  props: {
    customFunc: {
      type: Function
    }
  },
  methods: {
    ...mapMutations(['toggleMenu']),
    closeMenu() {
      this.toggleMenu(false)
    }
  }
}
</script>

<style></style>
