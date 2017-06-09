var app = getApp();
Page({
    data: {
        placeholderText:"连接服务器中...",
        messageArray:[],
        socketOpen:false,
        inputValue:""
    },
    onLoad: function(options) {
        var that = this;
        console.log("将要连接服务器。");
        //连接websocket
        wx.connectSocket({
            url: 'ws://localhost:8080'
        });
        //连接成功
        wx.onSocketOpen(function(res) {
            console.log("连接服务器成功。");
            that.setData({
                placeholderText:"连接服务器成功，请输入姓名。",
                socketOpen:true
            });
        });




        // 接受websocket信息
        wx.onSocketMessage(function(res) {
            console.log('收到服务器内容：' + res.data);


            var data = res.data;
            var dataArray = data.split("_");
            var newMessage = {
                type:dataArray[0],
                name:dataArray[1],
                time:dataArray[2],
                message:dataArray[3],
            };
            
            var newArray = that.data.messageArray.concat         (newMessage);
            that.setData({
                messageArray:newArray,
                placeholderText:"请输入信息"
            });
        });
    },
    //关闭websocket
    onUnload: function() {
        wx.closeSocket();
    },
    // 设置输入框数据
    bindKeyInput: function(e) {
        this.setData({
            inputValue: e.detail.value
        });
    },

    send: function() {
        if(this.data.inputValue!=""){
            this.sendSocketMessage(this.data.inputValue);
            this.setData({
                inputValue:""
            });
        }
    },
    // 发送给websocket的信息
    sendSocketMessage:function (msg){
        if (this.data.socketOpen) {
            wx.sendSocketMessage({
                data:msg
            })
        }
    }
});
