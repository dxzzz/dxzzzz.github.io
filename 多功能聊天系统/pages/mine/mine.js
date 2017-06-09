var app = getApp()
Page({
  data: {
    userInfo: {},
    // 设置 img name url 
    list:[
      {
        listTool:[
          {
            img:"../../image/photo.png",
            name:"用户信息",
             url:"../index/index"
          },
        ]
      },
      {
        listTool:[
          {
            img:"../../image/card.png",
            name:"启动日志",
             url:"../logs/logs"
          },
        ]
      },
      {
        listTool:[
          {
            img:"../../image/money.png",
            name:"播放音乐",
             url:"../audio/audio"
          }
        ]
      },
      {
        listTool:[
          {
            img:"../../image/bq_2.png",
            name:"地图导航",
             url:"../map/map"
          }
        ]
      },
      {
        listTool:[
          {
            img:"../../image/sc_2.png",
            name:"本机信息",
             url:"../phone/phone"
          }
        ]
      },
      {
       listTool:[
          {
            img:"../../image/sc_2.png",
            name:"播放视频",
             url:"../video/video"
          }
        ]
      }, 
    ]
  },
  // 设置事件对象 使得对应的事件对象 对应的跳转页面
  nextPage: function(event){
    console.log(event.currentTarget.dataset.log);
    console.log(event.currentTarget.dataset.url);
    // 跳转页面
    wx.navigateTo({
      url:event.currentTarget.dataset.url
    })
  },
  onLoad: function () {
    // console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    // })
    that.setData({
      userInfo:app.globalData.userInfo
    })
  }
})