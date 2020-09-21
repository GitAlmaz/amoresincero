import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '',
		name: 'Home',
		component: () => import ('../views/Home.vue')
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('../views/About.vue')
	},
	{
		path: '/mans',
		name: 'Mans',
		component: () => import('../views/Mans.vue')
	},
	{
		path: '/womans',
		name: 'Womans',
		component: () => import('../views/Womans.vue')
	},
	{
		path: '/services',
		name: 'Services',
		component: () => import('../views/Services.vue')
	},
	{
		path: '/contacts',
		name: 'Contacts',
		component: () => import('../views/Contacts.vue')
	}
]

const router = new VueRouter({
	base: process.env.BASE_URL,
	routes
})

export default router
