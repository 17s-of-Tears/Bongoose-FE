/* eslint-disable @typescript-eslint/no-explicit-any */
import { createRouter, createWebHistory, NavigationGuardNext } from 'vue-router'
import store from '@/store'
import { CommonMutationTypes } from '@/store/common/mutations'

const routes = [
	{
		path: '/',
		redirect: 'login'
	},
	{
		path: '/home',
		name: 'home',
		component: () => import('@/views/HomePage.vue'),
		beforeEnter
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/LoginPage.vue'),
		beforeEnter: (to: any, from: any, next: NavigationGuardNext) => {
			store.commit(`common/${CommonMutationTypes.START_LOADING}`)
			store.getters['auth/isLogged'] ? next('/home') : next()
		}
	},
	{
		path: '/signup',
		name: 'signup',
		component: () => import('@/views/SignUpPage.vue'),
		beforeEnter: (to: any, from: any, next: NavigationGuardNext) => {
			store.commit(`common/${CommonMutationTypes.START_LOADING}`)
			store.getters['auth/isLogged'] ? next('/home') : next()
		}
	},
	{
		path: '/profile',
		name: 'profile',
		component: () => import('@/views/ProfilePage.vue'),
		beforeEnter
	},
	{
		path: '/user_profile/:id',
		name: 'user_profile',
		component: () => import('@/views/AnotherProfilePage.vue'),
		beforeEnter
	},
	{
		path: '/friends_list',
		component: () => import('@/views/FriendsListPage.vue'),
		beforeEnter
	},
	{
		path: '/friends_find',
		component: () => import('@/views/FriendsFindPage.vue'),
		beforeEnter
	},
	{
		path: '/hashtag/:id',
		name: 'hashtag',
		component: () => import('@/views/HashTagPage.vue'),
		beforeEnter
	},
	{
		path: '/user/:id',
		component: () => import('@/views/UserSearchPage.vue'),
		beforeEnter
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: () => import('@/views/NotFound.vue'),
		beforeEnter: (to: any, from: any, next: NavigationGuardNext) => {
			store.commit(`common/${CommonMutationTypes.START_LOADING}`)
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

function beforeEnter(to: any, from: any, next: NavigationGuardNext) {
	store.commit(`common/${CommonMutationTypes.START_LOADING}`)
	store.getters['auth/isLogged'] ? next() : next('/login')
}

export default router
