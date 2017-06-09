const WebSocket = require('ws');
// const WebSocket = require('util');
// 检测 8080 端口
const wss = new WebSocket.Server({
    port:8080
});
console.log('WebSocket服务器已启动');

wss.on('connection',function connection(socket) { 
    console.log('有新的客户端连接');
    var id = null;

    // 构造客户端对象
    var newclient = {
        socket:socket,
        name:false
    };

    socket.on('message',function incoming(msg) { 
        var currentTime = getTime();
        // 判断是不是第一次连接
        // 判断newclient.name不存在的话
        if(!newclient.name){
            // 第一次输入的时候 
            // 客户端向服务器发送的msg
            newclient.name = msg;
            wss.clients.forEach(function each(client) {  
                // 判断服务器是否开启
                if(client.readyState === WebSocket.OPEN){
                    client.send('welcome_系统管理员_'+currentTime+'_欢迎'+msg+'加入聊天!');
                }
            });
            console.log(newclient.name + "加入聊天");
        }
        else{
            // 如果不是第一次的话 
            wss.clients.forEach(function each(client) {  
                // 先判断服务器的状态 和client 是否和socket一致
                if(client!=socket && client.readystate === WebSocket.OPEN){
                    // 发送 用户名+时间+消息  他人 判断条件 other
                    client.send('other_'+newclient.name+"_"+currentTime+"_"+msg);
                }
                else if(client == socket){
                     // 发送 用户名+时间+消息  他人 判断条件 self
                    client.send("self_"+newclient.name+"_"+currentTime+"_"+msg);
                }
                console.log(newclient.name+"于"+currentTime+"说"+msg);
            });
        }
     })
     // socket关闭的时候
 socket.on('close',function close() {  
     var currentTime = getTime();
     wss.clients.forEach(function each(client) { 
         // 判断服务器状态 
         if(client.readyState === WebSocket.OPEN){
             // 离开信息
             client.send("leave_系统管理员"+currentTime+"_"+newclient.name+"离开聊天");
         }
         console.log(newclient.name+"离开聊天。");
         });
    });


  });
  // 设置获取时间函数的返回值
  var getTime = function () {  
      var date = new Date();
      return date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
  };
