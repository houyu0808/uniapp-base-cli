/**
 * @author Samuel
 * @description 消息提示
 * @param {msg: String, duration: Number}
 */
module.exports = {
	success:function(msg = '操作成功',duration = 1000){
		uni.showToast({
			title: msg,
			icon: 'success',
			duration: duration
		})
	},
	error:function(msg = '系统异常',duration = 1000){
		uni.showToast({
			title: msg,
			icon: 'error',
			duration: duration
		})
	},
	showToast:function(msg = '',icon = 'none',duration = 1000){
		uni.showToast({
			title: msg,
			icon: icon,
			duration: duration
		})
	},
	showLoading:function(msg = '加载中...',mask = true,duration = 1000){
		uni.showLoading({
			title: msg,
			mask: mask,
			icon: 'loading',
			duration: duration
		})
	},
	hideLoading:function(){
		uni.hideLoading()
	},
	/**
	 * @author Samuel
	 * @description 下弹窗选择器
	 * @param {itemList: Array, callback: Function, fail: function} 
	 */
	showAction:function(itemList,callback,fail){
		uni.showActionSheet({
			itemList: itemList,
			success: function (res) {
				callback && callback(res)
			},
			fail: function (err) {
				fail && fail(err);
			}
		})
	},
	/**
	 * @author Samuel
	 * @description 下弹窗选择器
	 * @param {itemList: Array, callback: Function} 
	 */
	showModel:function(title,content,callback){
		uni.showModal({
			title: title,
			content: content,
			success: function (res) {
				if (res.confirm) {
					callback && callback(true)
				} else if (res.cancel) {
					callback && callback(false)
				}
			}
		});
	}
}
