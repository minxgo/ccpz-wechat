var api = require('../../utils/util.js');
var app = getApp();

Page({
  data: {
    isLoginPageSuccess: !1, //判断是否登录成功
    loginFail: !1,

    userAvatar: "",
    userName: "用户登录",
    invitationUrl: "",
    actionUrl: "../index/login",
    authorizationShow: !1,
    openCardList: null,

    navListFirst: [{  //列表
      id: "getAddress",
      label: "收货地址",
      link: '/pages/member/addresslist'
    }, {
      id: "coupon",
      label: "优惠券",
      extra: "",
      link: '/pages/member/coupon'
    }, {
      id: "receipt",
      label: "发票管理",
      link: ''
    }, {
      id: "customerService",
      label: "客户服务",
      link: ''
    }]
  },

  handlerUserAreaTap: function(e) {  //用户登录/个人信息
    var that = this;
    if ( that.data.isLoginPageSuccess ) {
      console.log(1)
    } else {
      wx.navigateTo({
        url: '/pages/index/login'
      })
    }
  },

  handlerNavTap: function(e) { //导航列表
    var that = this,
        link = e.currentTarget.dataset.link;
    if ( link !== '' ) {
      wx.navigateTo({
        url: link 
      })
    } else {
      wx.showModal({
        title: '',
        content: '请至官方App中查看',
        showCancel: false,
        confirmText: '我知道了'
      })
    }
  },

  onLoad: function () {
    api.LoginInfo.login().then(()=>{
      console.log(1);
    })
    
    if ( this.data.isLoginPageSuccess ) {

    }
  },
  onReady: function () { },
  onShow: function () { },
  onHide: function () { },
  onUnload: function () { },
  onPullDownRefresh: function () { },
  onReachBottom: function () { },
  onShareAppMessage: function () { }
});