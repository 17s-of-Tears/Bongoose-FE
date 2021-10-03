import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		redirect: 'home'
	},
	{
		path: '/home',
		name: 'home',
		component: () => import('@/views/HomePage')
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/LoginPage')
	},
	{
		path: '/join',
		name: 'join',
		component: () => import('@/views/JoinPage')
	},
	{
		path: '/profile',
		component: () => import('@/views/ProfilePage')
	},
	{
		path: '/chat',
		component: () => import('@/views/ChatPage')
	},
	{
		path: '/friends_list',
		component: () => import('@/views/FriendsListPage')
	},
	{
		path: '/friends_find',
		component: () => import('@/views/FriendsFindPage')
	},
	{
		path: '/hashtag/:id',
		component: () => import('@/views/HashTagPage')
	},
	{
		path: '/user/:id',
		component: () => import('@/views/UserSearchPage')
	}
]

const router = createRouter({
	history: createWebHistory(),
	scrollBehavior() {
		return { top: 0 }
	},
	routes
})

export default router
