import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		component: () => import('@/views/Home')
	},
	{
		path: '/about',
		component: () => import('@/views/About')
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
