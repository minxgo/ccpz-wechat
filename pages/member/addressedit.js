Page({
  data: {
    userName: '',  //用户名
    sex: 2, // 男/女  1/2  默认女
    tel: '',  //电话
    address: '',  //api返回的地址
    addrDetail: '', //门牌号
    addressTagList: [ //自定义小标签，可选
      {
        dictsId: 0,
        dictsName: '公司'
      },{
        dictsId: 1,
        dictsName: '家'
      },{
        dictsId: 2,
        dictsName: '学校'
      }
    ],
    tag: '', //当前选中的标签 默认无
    isDefault: 0, // 0/1  是否默认

    dulplication: !1,   //是否显示删除按钮
    addressCountLimit: -1,  //
    allowAddAddress: !0,

    showUserNameClear: !1,
    showTelClear: !1,
    showAddrDetailCleaer: !1,

    addrId: null,
    lon: '',
    lat: '',
    // isIpx: !1    //是否是iphonex
  },

  userNameClearHandler: function (e) {  //清除联系人
    this.setData({ userName: '', showUserNameClear: !1 })
  },
  telClearHandler: function (e) {  //清除电话
    this.setData({ tel: '', showTelClear: !1 })
  },
  addrDetailClearHandler: function (e) {  //清除门牌号
    this.setData({ addrDetail: '', showAddrDetailClear: !1 })
  },
  userNameInputHandler: function (e) {  //监听username输入
    var val = e.detail.value;
    val !== '' ? this.setData({ showUserNameClear: !0 }) : this.setData({ showUserNameClear: !1 });
  },
  telInputHandler: function (e) {  //监听tel输入
    var val = e.detail.value;
    val !== '' ? this.setData({ showTelClear: !0 }) : this.setData({ showTelClear: !1 });
  },
  addrDetailInputHandler: function (e) {  //监听detail输入
    var val = e.detail.value;
    val !== '' ? this.setData({ showAddrDetailClear: !0 }) : this.setData({ showAddrDetailClear: !1 });
  },
  sexClickHandler: function (e) {  //性别
    var datasex = parseInt(e.currentTarget.dataset.sex);
    this.setData({ sex: datasex });
  },
  addressTagClickHandler: function (e) {  //标签
    var tagid = parseInt(e.currentTarget.dataset.tagid);
    this.setData({ tag: tagid });
  },
  defaultClickHandler: function (e) { //是否默认
    var isDefault = this.data.isDefault;
    if ( isDefault !== 0 ){
      this.setData({ isDefault: 0 });
    } else {
      this.setData({ isDefault: 1 });
    }
  },
  gotoSelectAddress: function () {  //获取api地址
    wx.navigateTo({
      url: '/pages/member/addresssearch'
    })
  },

  addressSaveClickHandler: function () { //保存地址

  },

  
  addressDeleteClickHandler: function () { //删除地址

  },

  onLoad: function (option) {
    var that = this;
    if ( option !== null && option.id !== undefined ) {
      var msg = { //测试数据 - 
        addrId: 3,
        address: '江干区必易园 东宁路538',
        addrDetail: 'c383',
        isDefault: 1,
        tag: '公司',
        tel: '1527911111',
        userName: '夫士大夫的所发生的',
        sex: '男士'
      }
      that.setData({
        addrId: msg.addrId,
        dulplication: !0,
        userName: msg.userName,
        sex: msg.sex=='男士'?1:2,
        tel: msg.tel,
        address: msg.address,
        addrDetail: msg.addrDetail,
        tag: 1,
        isDefault: msg.isDefault
      })
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