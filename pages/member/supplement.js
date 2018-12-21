Page({
  data: {
    nickname: 'nihaoooooooo', //nick
    sex: '', //男/女  1/2
    sexAry: [{
      name: '先生',
      value: 1,
      className: ''
    }, {
      name: '女士',
      value: 2,
      className: ''
    }]
  },

  sexChange(e) {
    var val = e.detail.value - 1 , 
        saA = 'sexAry[' + val + '].className', 
        saS = 'sexAry[' + (val == 1 ? 0 : 1) + '].className';
    this.setData({
      sex: val,
      [saS]: '',
      [saA]: 'active'
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