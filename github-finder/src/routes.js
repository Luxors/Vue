//default
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//Pages
import Home from '@/pages/Home'
import NotFound from '@/pages/404'

//Routering
export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/portfolio/github-finder',
			name: 'home',
			component: Home
		},
		{
			path: '*',
			name: 'not-found',
			component: NotFound
		}
	]
})