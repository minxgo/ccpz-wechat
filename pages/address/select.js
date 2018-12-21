Page({
  data: {
    fromPage: "",
    delivery: null, //配送信息：自提/外送 pick/sent
    selectedAddressId: null,  //选择id
    cityInfo: {  //城市信息
      cityName: '杭州'
    },
    showDistance: !0, //距离
    shopList: [],   //门店信息列表
    shopSelectId: null,
    myAddressList: null,  //我的地址列表
    myAddressSelectId: 1, //地址列表选择 id
    nearbyAddressList: [],
    addressListLoading: !1,
    noShopDesc: "",
    shopPageNo: 1,
    shopPageSize: 10,
    shopHasMore: !0,
    nearbyAddressPageNo: 1,
    nearbyAddressPageSize: 10,
    nearbyAddressLimit: 50
  },

  
  tabClickHandler: function() { //自提/外送 切换按钮
    var deli = this.data.delivery;;
    this.getDeliveryMsg(deli,'click');
  },
  
  addAddressBtnHandler: function() { //新增地址
    var limit = this.data.addressCountLimit;
    if ( limit < 10 ) {
      wx.navigateTo({
          url: '/pages/member/addressedit/addressedit'
      })
    } else {
      wx.showToast({
          title: '地址最多可添加十条',
          icon: 'none',
          duration: 1500
      })
    }
  },

  getDeliveryMsg: function(deli,tap) {  //自提和外送按钮点击信息
    var that = this;
    if ( deli === 'sent' ) { 
      if ( tap === 'click' ) {
        that.setData({ delivery: 'pick' });
        that.getPick();
      } else {
        that.getSent();
      }
    } else if ( deli === 'pick' ) {
      if ( tap === 'click' ) {
        that.setData({ delivery: 'sent' });
        that.getSent();
      } else {
        that.getPick();
      }
    }
  },

  getSent: function() { //获取我的地址
    var that = this;
    wx.getStorage({
      key: 'addressSelect',
      success(res) {
        that.setData({
          selectedAddressId: res.data.id
        })
      },
      fail(res) {
        that.setData({
          selectedAddressId: 0
        })
      }
    })
    wx.request({
      url: 'https://www.easy-mock.com/mock/5bff90ac83499d03bbfbba2f/coffee/address',
      method: 'GET',
      success: function(res){
        var data = res.data.data;
        that.setData({
          addressCountLimit: data.length,
          myAddressList: data
        })
      }
    })
  },

  getPick: function() { //获取门店地址
    var that = this;
    wx.request({
      url: 'https://www.easy-mock.com/mock/5bff90ac83499d03bbfbba2f/coffee/mendian',
      method: 'GET',
      success: function(res){
        var data = res.data.data;
        that.setData({
          shopList: data
        })
      }
    })
  },

  shopSelectHandler: function(e) {  //门店地址选择，返回上一级
    var info = e.currentTarget.dataset.shop,
        id = info.deptId,
        deil = this.data.delivery;
    wx.setStorage({
      key: 'addressSelect',
      data: {
        deli: deil,
        id: id,
        info: info
      }
    })
    // this.setData({ selectedAddressId: id })
    wx.navigateBack({ delta: 1 })
  },

  myAddressSelectHandler: function(e) {  //我的选择地址，返回上一级
    var info = e.currentTarget.dataset.address,
        id = info.addrId,
        deil = this.data.delivery;
    wx.setStorage({
      key: 'addressSelect',
      data: {
        deli: deil,
        id: id,
        info: info
      }
    })
    wx.navigateBack({ delta: 1 })
  },

  onLoad: function (option) {
    this.setData({ delivery: option.deil })
    this.getDeliveryMsg(option.deil);
  },
  
  onReady: function () { },
  onShow: function () { },
  onHide: function () { },
  onUnload: function () { },
  onPullDownRefresh: function () { },
  onReachBottom: function () { },
  onShareAppMessage: function () { }
});