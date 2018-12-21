const https = require("../../service/https.js");

Page({
    data: {
        noAddressDesc: !1,  //无信息情况
        addressList: null,
        addressCountLimit: -1,  //计数限制，地址最多十个最高10个
        // isIpx: !1    //是否是iphonex
    },

    addressEditClickHandler: function(e) {   //修改地址
        var addrId = e.currentTarget.dataset.address.addrId;
        wx.navigateTo({
            url: '/pages/member/addressedit?id='+addrId
        })
    },

    addAddressBtnClickHandler: function(e) { //添加地址
        var limit = this.data.addressCountLimit;
        console.log(limit)
        if ( limit < 10 ) {
            wx.navigateTo({
                url: '/pages/member/addressedit'
            })
        } else {
            wx.showToast({
                title: '地址最多可添加十条',
                icon: 'none',
                duration: 1500
            })
        }
    },

    onLoad: function() {
        wx.showLoading({ title: '加载中' });
        var that = this;
        https.req.getAddressList()
        .then((res)=>{
            wx.hideLoading();
            var data = res.data.data;
            var leng = data.length;
            if ( leng === 0 || data === null ) {
                that.setData({
                    noAddressDesc: !0
                })
            } else {
                that.setData({
                    noAddressDesc: !1,
                    addressCountLimit: leng,
                    addressList: res.data.data
                })
            }
        }).catch((err)=>{
            wx.hideLoading();
            const msg = https.err(err);
            wx.showModal({ showCancel: false, content: msg});
        })
    },

    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});