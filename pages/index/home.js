Page({
  data: {
    sendTip: "123456",  //钱包小标签
    adPics: [{  //广告 下面有一个默认图片
      sourceUrl: "/resources/images/index/banner_default.png"
    }],

    locationSuccess: null,
    location: {},
    delivery: null,
    shopInfo: {},

    isShowEnvelope: !1, //弹框广告
    isReceived: !1,
    systemInfo: {},

    indicatorDots: !0, //轮播图
    autoplay: !1,
    interval: 50000,
    duration: 500,
    colseImg: !1
  },

  toMenu: function(){
    wx.switchTab({
      url: '/pages/index/menu/menu'
    })
  },

  // toACup(){
  //   wx.navigateTo({
  //     url: '/pages/index/menu/menu'
  //   })
  // },

  onLoad: function () { },
  onReady: function () { },
  onShow: function () { },
  onHide: function () { },
  onUnload: function () { },
  onPullDownRefresh: function () { },
  onReachBottom: function () { },
  onShareAppMessage: function () { }
});