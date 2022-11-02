import App from './App.vue'
import store from "@/store/store.js"
import cn from "@/constants/cn.js"
import pageUrl from "@/constants/pageUrl.js"
import api from "@/constants/api.js"
import request from "@/service/http.js"
import message from "@/utils/message.js"

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false

// 原型挂载

Vue.prototype.$request = request
Vue.prototype.$api = api;
Vue.prototype.$pageUrl = pageUrl;
Vue.prototype.$cn = cn
Vue.prototype.$message = message


App.mpType = 'app'
const app = new Vue({
	store,
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
