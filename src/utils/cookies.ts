import Cookies from 'js-cookie'

const saveAuthCookie = (value: string) => Cookies.set('auth', value)
const getAuthCookie = () => Cookies.get('auth')
const deleteAuthCookie = () => Cookies.remove('auth')

export { saveAuthCookie, getAuthCookie, deleteAuthCookie }
