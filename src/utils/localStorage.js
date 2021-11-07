const saveUserLocalStorage = value =>
	localStorage.setItem('user', JSON.stringify(value))
const getUserLocalStorage = () => JSON.parse(localStorage.getItem('user'))
const deleteUserLocalStorage = () => localStorage.removeItem('user')

export { saveUserLocalStorage, getUserLocalStorage, deleteUserLocalStorage }
