Page({
  data: {
    offset: 0,
    pageSize: 10,
    emptyData: null,
    // {  //无订单情况
    //   class: 'order',
    //   tips: '您还没有订单哦',
    //   btnText: '去喝一杯'
    // },
    refresh: !0,
    shareImg: "",
    scrollTop: 0,
    timer: !1,
    listData: [
      {
        orderId: 1, //id
        orderTypeName: '外卖订单',  //订单名称  外卖，自提
        orderNumber: '123456789',  //订单编号
        orderStatusName: '已完成',  //已完成，未完成，已取消
        orderStatusClass: 'gray',   //red gray blue
        orderAddress: '东溪德 必易园',  //地址，自提/外卖
        orderTime: '2018-01-01 14:06',  //订单完成时间
        goodsName: '美式咖啡等',    //商品名称，等字是拼接的
        goodsCount: 2,    //共几件商品
        orderAmount: 26,    //金额
        orderBtnId: 1,  //按钮id
        orderButtonClass: 'gray', //btn样式 red gray blue
        orderButtonType: 'success',  //类型
        orderButtonName: '再来一单', 
        orderStatusCode: 60,   //状态码
      },
      {
        orderId: 2, //id
        orderTypeName: '自提订单',  //订单名称  外卖，自提
        orderNumber: '123456789',  //订单编号
        orderStatusName: '未完成',  //已完成，未完成，已取消
        orderStatusClass: 'red',   //red gray blue
        orderAddress: '东溪德 必易园',  //地址，自提/外卖
        orderTime: '2018-01-01 14:06',  //订单完成时间
        goodsName: '美式咖啡等',    //商品名称，等字是拼接的
        goodsCount: 2,    //共几件商品
        orderAmount: 26,    //金额
        orderBtnId: 1,  //按钮id
        orderButtonClass: 'red', //btn样式 red gray blue
        orderButtonType: 'fail',  //类型
        orderButtonName: '重新下单',
        orderStatusCode: 60,   //状态码
      }
    ]
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