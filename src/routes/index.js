import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'

const routes = [
	{
		path: '/',
		redirect: 'login'
	},
	{
		path: '/home',
		name: 'home',
		component: () => import('@/views/HomePage'),
		beforeEnter
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/LoginPage'),
		beforeEnter: (to, from, next) => {
			store.commit('START_LOADING')
			store.getters['auth/isLogged'] ? next('/home') : next()
		}
	},
	{
		path: '/signup',
		name: 'signup',
		component: () => import('@/views/SignUpPage'),
		beforeEnter: (to, from, next) => {
			store.commit('START_LOADING')
			store.getters['auth/isLogged'] ? next('/home') : next()
		}
	},
	{
		path: '/profile',
		component: () => import('@/views/ProfilePage'),
		beforeEnter
	},
	{
		path: '/chat',
		component: () => import('@/views/ChatPage'),
		beforeEnter
	},
	{
		path: '/friends_list',
		component: () => import('@/views/FriendsListPage'),
		beforeEnter
	},
	{
		path: '/friends_find',
		component: () => import('@/views/FriendsFindPage'),
		beforeEnter
	},
	{
		path: '/hashtag/:id',
		component: () => import('@/views/HashTagPage'),
		beforeEnter
	},
	{
		path: '/user/:id',
		component: () => import('@/views/UserSearchPage'),
		beforeEnter
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: () => import('@/views/NotFound'),
		beforeEnter: (to, from, next) => {
			store.commit('START_LOADING')
			next()
		}
	}
]

const router = createRouter({
	history: createWebHistory(),
	scrollBehavior() {
		return { top: 0 }
	},
	routes
})

function beforeEnter(to, from, next) {
	store.commit('START_LOADING')
	store.getters['auth/isLogged'] ? next() : next('/login')
}

export default router
