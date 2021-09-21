import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		redirect: 'login'
	},
	{
		path: '/home',
		component: () => import('@/views/HomePage')
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/LoginPage')
	},
	{
		path: '/memberjoin',
		name: 'memberjoin',
		component: () => import('@/views/MemberJoinPage')
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
