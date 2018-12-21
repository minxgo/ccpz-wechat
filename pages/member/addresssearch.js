// 选择地址
Page({

  data: {
    addressBean: []
  },

  onLoad: function (options) {
    this.getAddress()
  },

  getAddress: function () {
    var that = this;  
    wx.chooseLocation({  
      success: function(res){ 
        var pages = getCurrentPages()
        var prevPage = pages[pages.length-2] 
        var regex = /^(北京市|天津市|重庆市|上海市|香港特别行政区|澳门特别行政区)/ //直辖市和特别行政区
        var isMatch = true //是否匹配
        var REGION_PROVINCE = [] //省

        var addressBean = {  
          ADDRESS:null,//完整地址
          BUILD: null,//建筑
          PROVINCE:null,//省
          CITY:null,//市
          AREA:null,//区
          STREET:null,//街道
        }  
        function regexAddressBean(address, addressBean){  
            regex = /^(.*?[市]|.*?地区|.*?特别行政区)(.*?[市区县])(.*?)$/g;  
            let addressArr = regex.exec(address);  
            if (!addressArr) {
              prevPage.setData({ //将数据传回上一个页面
                address: res.name+' '+res.address //格式：澳门广场 澳门特别行政区澳门半岛罗保博士街8号
              })
            } else {
              addressBean.ADDRESS = res.address
              addressBean.BUILD = res.name
              addressBean.CITY = addressArr[1]
              addressBean.AREA = addressArr[2]
              addressBean.STREET = addressArr[3]
              prevPage.setData({
                address: res.name+' '+addressArr[3] //格式：浙江大学医学院附属邵逸夫医院 庆春东路3号
              })
            }
            wx.navigateBack({ delta: 1 }) //返回上一个页面
        }

        if( !(REGION_PROVINCE = regex.exec(res.address)) ){
          regex = /^(.*?(省|自治区))(.*?)$/;  
          REGION_PROVINCE = regex.exec(res.address);
          addressBean.PROVINCE = REGION_PROVINCE[1]; 
          regexAddressBean(REGION_PROVINCE[3],addressBean);  
        } else {
          addressBean.PROVINCE = REGION_PROVINCE[1];
          regexAddressBean(res.address, addressBean);  
        }  
        
        that.setData({ addressBean:addressBean })
      },
      fail: function() {
        wx.navigateBack({ delta: 1 })
      },
      complete: function() {
        //判断用户未选择的情况
        if ( that.data.addressBean.length === 0 ) {
          wx.showModal({
            title: '提示',
            content: '您未选择地址，是否重新选择',
            cancelText: '返回',
            duration: 500,
            success: function (res) {
              if (res.confirm) {
                that.getAddress()
              } else if (res.cancel) {
                wx.navigateBack({ delta: 1 })
              }
            }
          })
        }
      }
    })
  },


  onShow: function () {

  },

  onHide: function () {

  },

})