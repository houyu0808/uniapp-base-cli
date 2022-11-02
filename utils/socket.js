import api from "@/constants/api.js"
//webSocket连接地址
class socketIO {
	baseUrl;
	isOpen;
	socketTask;
	
	constructor(url) {
        this.baseUrl = url
	}
	
	initWebsocketConnect(callback){
		//防止重复链接
		if(this.isOpen) return;
		//创建socket链接
		this.socketTask = uni.connectSocket({
			url: this.baseUrl,
			complete:(res)=>{
				// console.log('websocket链接创建成功--->',res);
			}
		})
		// if (!this.SocketTask) return;
		
		//连接成功
		this.socketTask.onOpen(res=>{
			// console.log('连接成功--->',res)
			this.isOpen = true
		})
		
		//连接关闭
		this.socketTask.onClose(res => {
			// console.log('连接已关闭--->',res)
			this.isOpen = false
			this.socketTask = false
		})
		
		//链接出错
		this.socketTask.onError(res => {
			// console.log('链接错误--->',res)
			this.isOpen = false
			this.socketTask = false
			// setTimeout(() => {
			// 	this.initWebsocketConnect()
			// },2000)
		})
		
		//接受服务端信息
		this.socketTask.onMessage(res => {
			// console.log('接收到信息--->',res)
			callback(res)
		})
	}
	
	//关闭socket
	closeSocket(){
	    if (this.isOpen){
	        this.socketTask.close();
			// console.log("连接已关闭--->");
			this.isOpen = false
	    }
	}
	
	//向服务器发起通信
	sendMsg(data){
		let msg = JSON.stringify(data)
		try{
			uni.sendSocketMessage({
				data: msg
			});
		}catch(e){
			// console.log('websocket通信异常',e);
			this.isOpen = false
			this.socketTask.closeSocket();
		}
	}
	receiveMsg(){
		
	}
	
	
}
module.exports = socketIO