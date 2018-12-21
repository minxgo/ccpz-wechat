Page({
  data: {
    orderId: "",
    dataLoaded: !0,     // 判断有无数据
    pageErr: !1,        // 判断有无信息

    orderDetail: { //订单详情
      
      orderStatusName: '已完成', //状态名： 已完成/已取消/
      orderType: 2,   //订单类型： 外送1  自提2
      orderNo: '123456789987',  //订单号
      orderTime: '2018-12-12 11:00',  //下单时间
      shopName: '东恒大厦店',   //商铺位置
      sequenceNumber: 1051,  //编号
      shopAddress: '杭州市江干区东宁路617号', //具体地址
      shopTelephone: '15279111111', //商铺电话
      takeMealTime: '2018-12-12 12:00',  //可取餐时间
      productAmount: 1, //商品数量
      orderPayAmount: 2222, //实付金额
      productList: [  //商品列表
        {
          name: '标准咖啡',
          amount: '5',
          initialPrice: '100',
          dispatchFee: 132
        }
      ],
      promotionList: [ //优惠
        {
          name: '使用咖啡钱包', //优惠名称
          amount: '24'  //减去金额
        }
      ],
      dispatchFee: 6,   //配送费
      dispatchInfo: { //配送地址
        dispatchAddress: '东溪德必易园 c3c3c33',
        memberName: '小猪佩奇',
        memberMobile: '15279111111',
        dispatcherName: '马云',  //配送员
        dispatcherMobile: '15279111111', //配送员电话
        slowpaymentTime: 1,
        arriveTime: '2018-20-20 12:22'
      }

    },

    statusArr: '感谢您的光临！', //状态名下方提示小字
    showSlowPayTips: !0,  //外送显示‘慢必赔’

    
    remainSecond: '',
    status: '期待您的再次光临',
    isOrderDone: !1,
    showArrivalTime: !0,  //显示到达时间，没有为自提
    showDeliveryContact: !0,  //显示配送员信息，没有为自提
    showEvaluate: !1,
    showPopup: !1,
    hasClosePopup: !1,
    inviteImgUrl: "",
    showShareTip: !1,
    shareConfig: {
      redirectUrl: "",
      title: "",
      imgUrl: "",
      desc: ""
    },

    sharePosition: 2,
    isDefaultShareType: !0,
    fissionImgUrl: "",
    isFirstGetOrderDetail: !0

    // isIpx: n.globalData.isIpx,
  },

  customerServ: function(e) {
    var tel = e.currentTarget.dataset.tel
    wx.makePhoneCall({
      phoneNumber: tel
    })
  },

  onLoad: function () { },
  onReady: function () { },
  onShow: function () { },
  onHide: function () { },
  onUnload: function () { },
  onPullDownRefresh: function () { },
  onReachBottom: function () { },
  onShareAppMessage: function () { }
});