Page({
  data: {
    remark: [
      {
        mRemarkName: '纸巾',
        remarkList: [
          { name: '不需要', selected: !0 },
          { name: '需要', selected: !1 }
        ]
      },{
        mRemarkName: '奶包',
        remarkList: [
          { name: '不需要', selected: !0 },
          { name: '需要', selected: !1 }
        ]
      },{
        mRemarkName: '糖包',
        remarkList: [
          { name: '不需要', selected: !0 },
          { name: '需要', selected: !1 }
        ]
      }
    ],
    remarkPlaceholder: "输入其他备注特殊要求（可不填）"
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