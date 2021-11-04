import Cookies from 'js-cookie'
// 쿠기 유효기간? 설정해야될듯
const saveAuthCookie = value => Cookies.set('auth', value)
const getAuthCookie = () => Cookies.get('auth')
const deleteAuthCookie = () => Cookies.remove('auth')

export { saveAuthCookie, getAuthCookie, deleteAuthCookie }
