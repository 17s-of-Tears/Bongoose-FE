import store from '@/store'

const customAlert = (content: string) => {
	store.commit('SET_MESSAGE', content)
	store.dispatch('AUTO_SET_ALERT')
}

export default customAlert
