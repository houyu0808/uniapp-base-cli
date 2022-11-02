import config from "@/constants/config.js"
export default async function() {
	/**
	 * 页面跳转拦截器
	 */

	let LIST = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
	//用遍历的方式分别为,uni.navigateTo,uni.redirectTo,uni.reLaunch,uni.switchTab这4个路由方法添加拦截器
	LIST.forEach(item => {
		uni.addInterceptor(item, {
			// 调用前拦截
			invoke(e) {
				//获取用户的token
				const userInfo = uni.getStorageSync('userInfo');
				// const token = uni.getStorageSync('token')
				//token是否已失效
				// tokenExpired = uni.getStorageSync('uni_id_token_expired') < Date.now();
				//获取要跳转的页面路径（url去掉"?"和"?"后的参数）
				const url = e.url.split('?')[0];
				let notNeed = config.WHITE_LIST.includes(url)
				// 如果在whiteList里面就不需要登录


				if (notNeed) {
					return e
				} else {
					//需要登录
					console.log(userInfo);
					if (!userInfo) {
						uni.showToast({
							duration: 2000,
							title: '请先登录',
							icon: 'none'
						})
						uni.navigateTo({
							url: config.LOGIN_PAGE
						})
						return false
					} else {
						return e
					}
				}

			},
			fail(err) { // 失败回调拦截 
				console.log(err);
				if (err) {
					console.log(err);
					uni.showModal({
						content: JSON.stringify(err),
						showCancel: false
					});
				}
			}
		})
	})
	//添加uniCloud云函数拦截器
}
