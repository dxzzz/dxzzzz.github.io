 var app = getApp();
 Page({
 data: {
 //  默认未获取地址
hasLocation: false,
},
//获取经纬度
getLocation: function(e) {
console.log(e)

var that = this
wx.getLocation( {
success: function( res ) {
console.log( res )
// 设置经纬度
that.setData( {
hasLocation: true,
location: {
longitude: res.longitude,
latitude: res.latitude
            }
        })
       }
    })
 },
 // 设置获得地图
 a:function(){
wx.getLocation({
  type: 'wgs84',
  success: function(res) {
    var latitude = res.latitude
    var longitude = res.longitude
    var speed = res.speed
    var accuracy = res.accuracy
  }
 }),
 wx.getLocation({
  type: 'gcj02', //返回可以用于wx.openLocation的经纬度
  success: function(res) {
    var latitude = res.latitude
    var longitude = res.longitude
    wx.openLocation({
      latitude: latitude,
      longitude: longitude,
      scale: 28
    })
  }
})
 },
 // 获取省份 城市 小区 街道
 // url 接口地址取自于 百度地图
     zrimary: function (options) {　
    　console.log('onLoad');　
        var that = this;　　
        wx.getLocation({　　　　
            success: function (res) {　　　　
                　　wx.request({　　　　　　
    url: 'http://api.map.baidu.com/geocoder/v2/?ak=btsVVWf0TM1zUBEbzFz6QqWF&callback=renderReverse&location=' + res.latitude + ',' + res.longitude + '&output=json&pois=1',             data: { },　　　　　　　　
         header: { 'Content-Type': 'application/json' },　　　
         　success: function(ops) {
            that.setData({
                  data1:JSON.parse(ops.data.substring(29,ops.data.length-1)).result.addressComponent.province,
                   data2:JSON.parse(ops.data.substring(29,ops.data.length-1)).result.addressComponent.city,
                    data3:JSON.parse(ops.data.substring(29,ops.data.length-1)).result.addressComponent.district,
                     data4:JSON.parse(ops.data.substring(29,ops.data.length-1)).result.addressComponent.street
                         })
                     }　　　　　
                })
            }
        })
    },
 //根据经纬度在地图上显示
openLocation: function( e ) {
var value = e.detail.value
wx.openLocation( {
longitude: Number( value.longitude ),
latitude: Number( value.latitude ),
        })
    },
    renderReverse:function(){
        console.log(data)
        }, 
      })
            
    