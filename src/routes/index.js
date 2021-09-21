import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		component: () => import('@/views/HomePage')
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/LoginPage')
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
