var app = getApp()
Page({
   data: {
      name:'夢灯籠',
     author:'RADWIMPS',
poster:"http://p3.music.126.net/sSxbRt9RpC6s_MaewyDJfA==/18597139672292692.jpg",
src:"http://m2.music.126.net/h5sli9SrGADPLn-JSMyfIg==/3420580731402332.mp3"
  },
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')   
  },
  // 点击进行随机播放音乐
  rimary:function(){
    console.log(123)
     var that = this
     var kkk = Math.floor(Math.random()*1000)+418603000;
    console.log(kkk); 
     wx.request({
  url: 'http://music.163.com/api/song/detail/?id='+kkk+'&ids=['+kkk+']&csrf_token=', //网易云音乐接口接口地址
  data: {
     x: '' ,
     y: ''
  },
  header: {
      'content-type': 'application/json'
  },
  // 从获得的json数据中取得 歌曲图片链接/歌曲名/艺术家名字/歌曲mp3链接
  success: function(res) {
        that.setData({
          poster:res.data.songs[0].album.blurPicUrl,
          name: res.data.songs[0].name,
          author:res.data.songs[0].artists[0].name,
          src:res.data.songs[0].mp3Url,
        })
  }
})
  },
  // 设置输入框值
   bindKeyInput: function(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  // 设置播放 暂停 等功能
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  }
})