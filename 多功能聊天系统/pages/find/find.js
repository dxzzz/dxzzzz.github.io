var app = getApp()
  // 由于测试阶段 真机测试拿不到 url接口 所以只能应用一些假数据
Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    list:[
        {  
               url:'http://imgsize.ph.126.net/?imgurl=http://cms-bucket.nosdn.127.net/47f27efa58554bd99fead0251393ef8620170308150518.jpeg_600x250x1x85.jpg',
        title:'--扫黄之后的东莞：全中国最干净的城市--',
        head:'--大国小民--'
        },
        {  
               url:'http://imgsize.ph.126.net/?imgurl=http://cms-bucket.nosdn.127.net/402dcf62c5cd40f291eb1c20465f2e2b20170307162400.jpeg_600x250x1x85.jpg',
        title:'--大国小民|被母爱绑架的中国巨婴--',
         head:'--大国小民--'
        },
         {     url:'http://imgsize.ph.126.net/?imgurl=http://cms-bucket.nosdn.127.net/5c8a2c7610cb4bb298ee4a111c0aeb6120170307182429.jpeg_600x250x1x85.jpg',
        title:'--美国来的东北女婿：我做梦都想住在北大荒--',
         head:'--大国小民--'
        },
         {     url:'http://imgsize.ph.126.net/?imgurl=http://cms-bucket.nosdn.127.net/cc246cf742174a209c042b199e86bb9120170308145500.png_600x250x1x85.jpg',
        title:'--伏地魔把林妹妹拐走，问过宝玉的意见吗--',
         head:'--大国小民--'
        },
         {     url:'http://imgsize.ph.126.net/?imgurl=http://cms-bucket.nosdn.127.net/47f27efa58554bd99fead0251393ef8620170308150518.jpeg_600x250x1x85.jpg',
        title:'--为什么说"同一个世界，同一张初恋脸"--',
         head:'--大国小民--'
        },
    ],
    animationData: {}
  },
  // 点击图片 设置的一个动画
    abc: function(){
    var animation = wx.createAnimation({
      duration: 1000,
        timingFunction: 'ease',
    })

    this.animation = animation

    animation.scale(1,1).rotate(-360).step({ duration: 2000 })
    animation.scale(1,1).rotate(360).step({ duration: 2000 })
    this.setData({
      animationData:animation.export()
    })
    }
    // 下面 是拿到url接口时处理的数据
//   onLoad:function(options){
//       var that = this;
//       wx.request({
//         url: 'http://news-at.zhihu.com/api/4/news/latest',
//          headers: {
//         'Content-Type': 'application/json'
//       },
//         success: function(res){
//           console.log(res.data.top_stories[0].image);
//           that.setData({
//               list:res.data.top_stories
//           })
//         },
//       })
//   }
})

 