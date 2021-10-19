const saveAuthCookie = value => (document.cookie = `auth=${value}`)

const getAuthCookie = () =>
	document.cookie.replace(/(?:(?:^|.*;\s*)auth\s*=\s*([^;]*).*$)|^.*$/, '$1')

const deleteCookie = value =>
	(document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`)

export { saveAuthCookie, getAuthCookie, deleteCookie }
