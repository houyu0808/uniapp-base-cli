const authorization = uni.getStorageSync("authorization")
const header = {
	'userType' : 'app',
	'authorization': authorization || ''
}

export default header