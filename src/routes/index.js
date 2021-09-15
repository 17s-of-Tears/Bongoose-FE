import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		component: () => import('@/views/HomePage')
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
	routes
})

export default router
