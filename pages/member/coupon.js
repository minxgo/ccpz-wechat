Page({
  data: {
    couponAvailable: !0,  //显示可用优惠券张数
    couponNum: "2", //可用数量
    emptyData: null,  
    // {  //无优惠券情况
    //   class: 'order',
    //   tips: '您还没有优惠券哦',
    //   btnText: '去喝一杯'
    // },

    comeFrom: "",
    // isIpx: o.globalData.isIpx,
    offset: 0,
    pageSize: 10,
    couponList: [ //优惠券列表
      {
        type: 'discount', // face  discount
        value: '9.', //
        num1: '9',  //折扣
        desc: '折扣', //描述
        name: '新人免费卷',
        validDate: '有效期至2019-11-11',
        display: true,
        detailDescList: ['这是使用规则这是使用规则这是使用规则这是使用规则这是使用规则这是使用规则这是使用规则这是使用规则这是  使用规则这是使用规则这是使用规则']
      },{
        type: 'face', // face  discount
        value: '20',  //数值
        num1: '10',  //折扣
        desc: '满减', //描述
        name: '新人免费卷',
        validDate: '有效期至2019-11-11',
        display: true,
        detailDescList: ['这是使用规则这是使用规则这是使用规则这是使用规则这是使用规则这是使用规则这是使用规则这是使用规则这是使用规则这是使用规则这是使用规则']
      }
    ]
  },

  toggle: function(e) {
    var idx = e.currentTarget.dataset.index, 
    clo = e.currentTarget.dataset.close, 
    cou = "couponList[" + idx + "].display";
    this.setData({
      [cou]: !clo
    });

    
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