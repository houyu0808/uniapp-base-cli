import request from "@/service/request.js"

/**
 * @author Samuel
 * @description post请求
 * @param {String} url 
 * @param {Object} data = [requestBody]
 * @param {Object} params = [requestParams]
 * @param {Object} header = [requestHeader]
 */
function post(url,data,params,header){
	return request.request({
		url:url,
		data:data,
		params:params,
		header: {'content-type': 'application/json', ...header},
		method:'POST'})
}
/**
 * @author Samuel
 * @description get请求
 * @param {String} url 
 * @param {Object} data: [requestParams]
 * @param {Object} header: [requestHeader]
 */
function get(url,data,header){
	return request.request({
		url:url,
		data:data,
		header:header,
		method:'GET'})
}

function isBlank(str) {
	if (Object.prototype.toString.call(str) === '[object Undefined]') { //空
		return true
	} else if (
		Object.prototype.toString.call(str) === '[object String]' ||
		Object.prototype.toString.call(str) === '[object Array]') { //字条串或数组
		return str.length == 0 ? true : false
	} else if (Object.prototype.toString.call(str) === '[object Object]') {
		return JSON.stringify(str) == '{}' ? true : false
	} else {
		return true
	}
}

module.exports = {
	post,
	get,
	isBlank
}
