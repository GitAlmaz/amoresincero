import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import localizeFilter from '@/filters/localize.filter'
import YmapPlugin from 'vue-yandex-maps'


Vue.config.productionTip = false

// const YmapSettings = {
// 	apiKey: '58e991ff-448b-48da-a58e-4737ff0b57c1',
// 	lang: 'en_US',
// 	version: '2.1'
// }

Vue.use(YmapPlugin)

Vue.filter('localize', localizeFilter)

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
