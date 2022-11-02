const ApiUtil = require("../service/http");

var BASE_URL
var SOCKET
var IMG_URL = ''
if (process.env.NODE_ENV === 'development') {
	SOCKET = ""
	BASE_URL = "" 
} else {
	BASE_URL = "" // 线上环境
	SOCKET = ""
}

module.exports = {
	imageUrl: IMG_URL,
	test: BASE_URL + "logFileDnloads/test",
	getInfo: BASE_URL + "logFileDnloads/getInfo"
}
