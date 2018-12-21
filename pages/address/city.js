Page({
  data: {
    fromPage: "",
    selectedCityId: 4, //定位 id
    locationCityInfo: { //定位信息
      cityName: '杭州'
    },
    letterAry: [ 'B', 'N' ],  //右侧字母
    quickLetter: "curr",
    cityAry: [  //cityId不能为零
      'B',
      {
        cityId: 1,
        showName: '北京'
      },
      'N',
      {
        cityId: 2,
        showName: '南昌'
      },
      {
        cityId: 3,
        showName: '南京'
      },
      {
        cityId: 4,
        showName: '南宁'
      }
    ],

    sourceCtiyAry: null
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