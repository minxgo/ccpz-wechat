Page({
  data: {
    payAgree: !0,
    useDiscount: !0,

    order: {
      eatway: '',   //自提
      aboutTime: '12:00',  //取餐/配送 时间
      initialPrice: '60',  //合计价格
      priceList: [  //商品和配送费（区别在于prodect）
        {
          name: '标准奶茶',
          type: 'product',  //
          desc: '大/加奶',  //备注
          amount: '3',
          totalPrice: '60',
        },
        { 
          name: '配送费',
          type: 'dispatchFee',  //
          desc: '面价满35元免配送费', //备注
          amount: '0',
          totalPrice: '6',
        }
      ],
      //咖啡钱包优惠
      addCoffeeVoucher: {
        name: '充值优惠',
        bgColor: '#D1742F',
        nameColor: '#ffffff'
      },
      hasCafeKu: !0,  //咖啡钱包是否有优惠
      cafeKuDiscount: 25, //咖啡钱包优惠金额

      //优惠券优惠
      hasCoupon: !0,
      couponDiscount: 25,

      // discountList: [ //折扣商品
      //   {
      //     name: '标准奶茶',
      //     totalPrice: 60
      //   }
      // ]
    },

    eatway: 'package',  //店内用餐/打包带走 eat/package
    delivery: 'pick',  //自提/配送   pick/sent

    //自提配送信息
    shopInfo: {
      name: '采荷嘉业大厦店',
      number: '(No.0320)',
      address: '东溪德必易园 ccccc'
    },
    //外送配送信息
    addressInfo: {
      userName: '你你你你呢',
      sex: '男士',
      address: '必易园东溪德必易园',
      addrDetail: 'aaaaaa',
      tag: '公司',  // 公司/家
      tel: '1527444444'
    },

    //使用优惠
    useDiscount: !0,

    //支付协议
    payAgree: !0,

    //备注
    remark: '几点上课记录即可立即骷髅精灵快乐健康来连连看 '

    // isIpx: getApp().globalData.isIpx
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