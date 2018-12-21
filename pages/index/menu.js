Page({

  data: {
    delivery: null,   //配送方式  自提/外送   pick/sent
    locationSuccess: null,
    cityNoShop: !1,
    cityNoShopText: "",
    areaNoShop: !1,
    areaNoShopText: null,
    hasTakeoutKitchen: !1,
    hasTakeoutKitchenText: null,
    hasNoProductText: null,
    dispatchMsg: "",
    shopInfo: null,   //自提信息
    addressInfo: null,    //配送信息
    adPos: [    //广告列表
      {
        clickUrl: '',
        sourceUrl: '/resources/images/index/ad_test02.jpg'
      }
    ],
    products: null,
    menuActiveIndex: 0,
    productActiveIndex: 0,  //当前下标
    indicatorDots: !0,
    autoplay: !0,
    interval: 5e3,
    duration: 500,
    product: null,      //弹框内信息
    showDetailLayer: !1,  //显示弹框
    detailLayerAnimateData: null,
    detailProductCount: 1,
    detailStandardCode: null,
    detailTemperCode: null,
    detailAdditionList: [],
    productScrollTop: [],
    currentScrollTop: 0, //
    windowHeight: "",
    windowWidth: "",
    radio: "",
    calcHeight: '', //左侧列表高度
    addressSentHeight: 140,   //外送元素高度
    addressPickHeight: 140,   //自提元素高度
    bannerHeight: 240,
    bannerHeightDefault: 240,
    contentHeight: '', //右侧菜单内容高度
    productItemHeight: ''
  },

  
  addShoppingCartForIndex: function (event) { //弹框
    var product = event.currentTarget.dataset.product;
    this.setData({
      product: product,
      showDetailLayer: !0
    })
  },

  hideProductDetailLayer: function (event) {  //隐藏弹框
    this.setData({
      product: null,
      showDetailLayer: !1
    })
  },

  tapMenuItem: function (event) { //菜单锚点
    var id = event.currentTarget.dataset.id;
    this.setData({
      productActiveIndex: id
    });
  },

  calcContentHeight: function () { //给内容设置高度
    var that = this;
    wx.createSelectorQuery().select("#fixed-helper").boundingClientRect(function (e) {
      that.setData({
        contentHeight: e.height - 120 - 70
      });
      console.log(e.height)
      console.log(that.data.contentHeight)

    }).exec();
    
  },

  gotoSelectAddress: function() { //跳转选择地址
    var deil = this.data.delivery;
    wx.navigateTo({
      url: '/pages/address/select/select?deil='+deil
    })
  },

  getAddressStorage: function() { //获取储存在缓存里的地址
    var that = this;
    wx.getStorage({
      key: 'addressSelect',
      success(res) { //缓存不为空
        var data = res.data;
        if ( data.deli !== 'sent' ){
          that.setData({
            delivery: data.deli,
            shopInfo: data.info
          })
        } else {
          that.setData({
            delivery: data.deli,
            addressInfo: data.info
          })
        }
      },
      fail: function() { //缓存为空，默认外送
        that.setData({
          delivery: 'sent'
        })
        that.getSentFirstMsg();
      }
    })
  },

  getSentFirstMsg: function(){ //第一次外送信息
    //获取一条默认数据
    var msg = { //测试数据
      addrId: 3,
      address: '江干区必易园 东宁路538',
      addrDetail: 'c383',
      isDefault: 1,
      tag: '公司',
      tel: '1527911111',
      userName: '夫士大夫的所发生的',
      sex: '男士'
    }
    this.setData({
      addressInfo: msg
    })
  },
  
  getPickFirstMsg: function(){ //第一次自提信息
    var msg = { //测试数据
      name: '采荷嘉业大厦店',
      address: '江干区必易园 东宁路538',
      distanceText: '300m'
    }
    this.setData({
      shopInfo: msg
    })
  },

  onLoad: function () {
    this.calcContentHeight();
    // wx.clearStorage(); //清空缓存
    this.setData({
      products: [
        {
          kindName: '大师咖啡',  // 商品类型名称
          isTimeDiscount: !0,   // 是否有折扣
          timeDiscountName: '五折风暴',   // 折扣相关信息
          kindDesc: 'WBC（世界咖啡师大赛）冠军团队拼配', // 类型简介
          displayedIconUrl: '',   // 商品类型名称小图标
          productList: [
            {
              productId: 0, // 编号
              maxAmount: 5, // 库存  当为零的时候状态为告罄
              defaultPicUrl: '/resources/images/index/good_test.png', // 商品小图片
              productDescPicUrl: '/resources/images/index/good_desc_test.jpg', // 商品介绍页图片
              promotionMsg: '冲一赠一',   // 优惠
              name: '标准美式',   // 商品名称
              enName: 'Americano',  // 商品英文名
              detailDesc: '大/无糖/无奶', //默认标签
              initialPrice: '25',   //初始价格  初始价格如果和折扣价格一样，则样式变化
              discountPrice: '12.5',  //折扣价格
              tagList: [    //标签
                {
                  content: '12',  //标签内容
                  bgColor: '#f00' //标签背景颜色
                }
              ],
              standardCodeItem: [ //规格
                {
                  name: '大',   //名称
                  checked: 1,   //是否选中
                  isInventory: 1  //是否有存货
                }, {
                  name: '中',
                  checked: 0,
                  isInventory: 1
                }
              ],
              temperAttributeItem: [ //温度
                {
                  name: '去冰',   //名称
                  checked: 1,   //是否选中
                  isInventory: 1  //是否有存货
                }, {
                  name: '加冰',
                  checked: 0,
                  isInventory: 1
                }, {
                  name: '加热',
                  checked: 0,
                  isInventory: 0
                }
              ],
              additionList: [ //其他要求
                {
                  typeName: '糖',
                  typeList: [
                    [
                      {
                        name: '三分',
                        checked: 1,
                        isInventory: 5,
                        price: 0    //价格默认值为零时不显示‘元’字
                      },
                      {
                        name: '六分',
                        checked: 0,
                        isInventory: 1,
                        price: 3
                      },
                      {
                        name: '九分',
                        checked: 0,
                        isInventory: 0,
                        price: 6
                      }
                    ]
                  ]
                }
              ],
              productCommentList: [ //大咖说
                {
                  celeName: '大咖说胜多负少的', //名称
                  celeTitle: '大咖说2', //小标题
                  picUrl: '/resources/images/index/good_desc_test.jpg',   //头像
                  titleColor: '#f00', //小标题颜色
                  titleBackground: '#eee', //小标题背景颜色
                  celeComment: '初始价格如果和折扣价格一样，则样式变化',  //内容
                  celeTimeStr: '2018-06-12' //发布时间
                }
              ],
              desc: '这是一个鸡肉卷，这是一个鸡肉卷。这是一个鸡肉卷，这是一个鸡肉卷。这是一个鸡肉卷，这是一个鸡肉卷。',
              descAry: ['这是一个鸡肉卷，这是一个鸡肉卷。', '这是一个鸡肉卷，这是一个鸡肉卷。2', '这是一个鸡肉卷，这是一个鸡肉卷。这是一个鸡肉卷，这是一个鸡肉卷。3']
            },
            {
              productId: 1, 
              maxAmount: 5, 
              defaultPicUrl: '/resources/images/index/good_test.png',
              promotionMsg: '冲一赠一',   
              name: '标准美式',   
              enName: 'Americano', 
              detailDesc: '大/无糖/无奶', 
              initialPrice: '25',   
              discountPrice: '25',  
              tagList: [
                {}
              ]
            },
            {
              productId: 1,
              maxAmount: 0,
              defaultPicUrl: '/resources/images/index/good_test.png',
              promotionMsg: '冲一赠一',
              name: '标准美式',
              enName: 'Americano',
              detailDesc: '大/无糖/无奶',
              initialPrice: '25',
              discountPrice: '25',
              tagList: [
                {}
              ]
            }
          ]
          
        },
        {
          kindName: '大师咖啡',  // 商品类型名称
          isTimeDiscount: !0,   // 是否有折扣
          timeDiscountName: '五折风暴',   // 折扣相关信息
          kindDesc: 'WBC（世界咖啡师大赛）冠军团队拼配', // 类型简介
          displayedIconUrl: '',   // 商品类型名称小图标
          productList: [
            {
              productId: 0, // 编号
              maxAmount: 5, // 库存  当为零的时候状态为告罄
              defaultPicUrl: '/resources/images/index/good_test.png', // 商品图片
              promotionMsg: '冲一赠一',   // 优惠
              name: '标准美式',   // 商品名称
              enName: 'Americano',  // 商品英文名
              detailDesc: '大/无糖/无奶', //默认标签
              initialPrice: '25',   //初始价格  初始价格如果和折扣价格一样，则样式变化
              discountPrice: '12.5',  //折扣价格
              tagList: [    //标签
                {
                  content: '12',  //标签内容
                  bgColor: '#f00' //标签背景颜色
                }
              ]
            },
            {
              productId: 1,
              maxAmount: 5,
              defaultPicUrl: '/resources/images/index/good_test.png',
              promotionMsg: '冲一赠一',
              name: '标准美式',
              enName: 'Americano',
              detailDesc: '大/无糖/无奶',
              initialPrice: '25',
              discountPrice: '25',
              tagList: [
                {}
              ]
            },
            {
              productId: 1,
              maxAmount: 0,
              defaultPicUrl: '/resources/images/index/good_test.png',
              promotionMsg: '冲一赠一',
              name: '标准美式',
              enName: 'Americano',
              detailDesc: '大/无糖/无奶',
              initialPrice: '25',
              discountPrice: '25',
              tagList: [
                {}
              ]
            }
          ]

        }
      ]
    });

    wx.setTabBarBadge({
      index: 3,
      text: '1'
    })
  },

  onReady: function () { },
  onShow: function () {
    this.getAddressStorage();
  },
  onHide: function () { },
  onUnload: function () { },
  onPullDownRefresh: function () { },
  onReachBottom: function () { },
  onShareAppMessage: function () { }
});