Page({
  data: {
    cart: {
      discountPrice: '125', // 总价
      priceDesc: '123456',  // 价格描述
      productList: [
        {
          name: '美式咖啡',
          promotionMsg: '买一送一', // 促销
          detailDesc: '大/加奶', // 默认信息
          discountPrice: '132', // 折扣价格
          initialPrice: '134',  // 初始价格
          amount: 5,  //购买数量
          unCheckMsg: '库存不足', // 不可选时提示信息
          checked: true,    // 是否选中
          canCheck: true  // 是否可选 true / false 
        }
      ]
    },

    loading: "hidden",   // 是否登录
    isCanConfirm: !1,   // 是否可以结算

    clearFlag: false, // 判断购物车是否为空
    shopInfo: {}, // ！账号信息，包括是否有选择的门店信息
    confirmBtnText: "去结算"
  },

  // removeStart: function (t) {
  //   1 == t.touches.length && this.setData({
  //     removeTouch: {
  //       startX: t.touches[0].clientX,
  //       index: t.currentTarget.dataset.index
  //     },
  //     removeVibrate: 0
  //   });
  // },
  // recordMove: function (t) {
  //   var e = this.data.cart, a = this.data.removeTouch.index;
  //   if (void 0 === a) return !1;
  //   var r = t.touches[0].clientX, i = this.data.removeTouch.startX - r, n = "margin-left:0";
  //   i > 0 && (.8 * this.data.res.screenWidth <= i ? this.data.removeVibrate || (wx.vibrateShort(),
  //     this.setData({
  //       removeVibrate: 1
  //     })) : this.data.removeVibrate && this.setData({
  //       removeVibrate: 0
  //     }), n = "margin-left:" + (0 - i) + "px"), e.productList.forEach(function (t, e) {
  //       t.itemStyle = a === e ? n : "margin-left:0";
  //     }), this.setData({
  //       cart: e
  //     });
  // },
  // removeEnd: function (t) {
  //   var e = this.data.removeTouch.index, a = this.data.cart;
  //   if (void 0 === e) return !1;
  //   if (1 == t.changedTouches.length) {
  //     var r = t.changedTouches[0].clientX, i = this.data.removeTouch.startX - r, n = "";
  //     if (i < 40) n = "margin-left:0", a.productList[e].itemStyle = n; else {
  //       if (!(.8 * this.data.res.screenWidth > i && i >= 40)) return this.removeItem(t),
  //         !1;
  //       n = "margin-left:-175rpx", a.productList[e].itemStyle = n;
  //     }
  //     this.setData({
  //       cart: a
  //     });
  //   }
  // },
  

  onLoad: function () {
    var that = this;
    
  },
  onReady: function () { },
  onShow: function () { },
  onHide: function () { },
  onUnload: function () { },
  onPullDownRefresh: function () { },
  onReachBottom: function () { },
  onShareAppMessage: function () { }
});