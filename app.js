App({
    globalData: {
        isLogin: !1,
        loginMsg: null,
        city: ''
    },

    onLaunch: function(e) {
        var that = this;
        wx.getLocation({
            type: 'wgs84',
            success: function(res){
                var lat = res.latitude,
                    lon = res.longitude,
                    url = 'https://apis.map.qq.com/ws/geocoder/v1/?location='+lat+','+lon+'&key=EZDBZ-LAXHW-ZQDRP-O4A7S-PJV5K-7ZBZU';
                wx.request({
                    url: url,
                    success: function(res){
                        
                        that.globalData.city = res.data.result.ad_info.city;
                        // console.log(res)
                    }
                })
            },
            fail: function() {
                // fail
            },
            complete: function() {
                // complete
            }
        })

    }
    
});