/**
 * @author Samuel
 * @description 请求封装
 * @param {url:String, params:Object, data:Object, header:Object, method:String}
 * @returns Promise<any>
 */
import headerConfig from './headerConfig.js'

function request({url:url,params:params,data:data,header:header,method:method}) {
	if(method === 'POST'){
		url += Object.keys(params).reduce((sum, key, i) => {
			if (i === 0) sum += `${key}=${encodeURIComponent(params[key])}`;
			else sum += `&${key}=${encodeURIComponent(params[key])}`;
			return sum;
		}, '?');
	}
	return new Promise(function(resolve, reject) {
		uni.request({
			url: url,
			data: data,
			method: method,
			header: {...headerConfig,...header},
			success: function(res) {
				if (res.statusCode == 200) {
					if (res.data.code == 200) {
						resolve(res.data);
					} else {
						reject(res.data);
					}
				} else {
					reject({
						data: {
							msg: "网络异常"
						}
					});
				}
			},
			fail: function(err) {
				reject({
					data: {
						msg: "网络异常"
					}
				});
			}
		})
	});
};

module.exports = {
	request
}
