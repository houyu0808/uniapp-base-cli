<template>
	<view class="content">
		<nav-bar></nav-bar>
		<button @click="showLoading">显示位置</button>
	</view> 
</template>

<script>
import navBar from "@/components/navBar/navBar.vue"
export default {
	data() {
		return {
			title: 'Hello',
			deviceInfo: {}
		};
	},
	components:{
		navBar
	},
	onLoad() {
		this.getData()
		this.getInfo()
	},
	methods: {
		showLoading(){
			 this.$message.showAction(['1','2','3'],this.callback,this.fail)
			// this.$message.showModel('提示','确定删除吗?',this.callback)
		},
		callback(res){
			console.log('res',res);
		},
		fail(err){
			console.log('err',err);
		},
		getData(){
			this.$request.post(this.$api.test,{gender: '男'},{name: 123}).then(res => {
				console.log(res);
			})
		},
		getInfo(){
			this.$request.get(this.$api.getInfo,{msg: 'hi'})
		}
	}
};
</script>

<style>
.content {
	text-align: center;
	height: 400upx;
	margin-top: 200upx;
}
</style>
