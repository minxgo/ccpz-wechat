const https = require("../../service/https.js");
const md5 = require("../../utils/md5.js");

Page({
  data: {
    mobile: "", // 手机号
    verifycode: "", // 验证码
    sendText: "获取验证码",
    sendTextState: "disabled",  //是否可发送验证码状态 enable / disabled
    sendTextDisabled: !0, // 是否禁用
    sendClass: "unsend",  // 未发送前/已发送  unsend / send
    remain: 0,
    deviceId: "",
    submitState: "disabled",  // 确认按钮状态 enable / disabled
    clearBtnState: "hide" // 清除内容
  },

  mobileInput (e) { //监听手机输入
    var val = e.detail.value, vlen = val.length;
    this.setData({ mobile: val });
    vlen == 11 && this.setData({ sendTextDisabled: !1, sendTextState: 'enable' })
  },

  verifycodeInput (e) {
    var that = this, code = e.detail.value, clen = code.length, tel = that.data.mobile;
    this.setData({ verifycode: code });
    if ( clen == 4 && tel != '' ) {
      this.setData({ submitState: 'enable'});
    } else {
      this.setData({ submitState: 'disabled'});
    }
  },

  sendVerifycode () {  //发送验证码
    var that = this, tel = that.data.mobile, reg = /^1[34578]\d{9}$/, 
        time = Math.floor(new Date().getTime() / 60000) + 'huantou',
        sign = md5.hexMd5(time);
    console.log(tel);
    console.log(time);
    console.log(sign);
    if ( reg.test(tel) ){
      https.req.getVerifyCode({data: {
        phone: tel,
        sign: sign
      }})
      .then((res)=>{
        console.log(res);
        var status = res.data.status;
        if ( status == 1 ) {
          wx.showToast({ title: '验证码发送成功！', icon: 'none'});
          this.setData({ sendTextDisabled: !0, sendClass: 'send'});
          var num = 5, timer = setInterval(()=>{
            num--;
            this.setData({ sendText: num + 's'});
            if ( num == 0 ) {
              this.setData({ sendTextDisabled: !1, sendClass: 'unsend', sendText: '重新发送' });
              clearInterval(timer);
            }
          },1000)
        } else {
          wx.showToast({ title: '网络故障，请稍后重试！', icon: 'none'});
        }
      }).catch((err)=>{
        const msg = https.err(err);
        wx.showModal({ showCancel: false, content: msg});
      })
    } else {
      wx.showToast({ title: '请输入正确的手机号！', icon: 'none'})
    }
  },

  login () {  //验证登录
    var that = this, tlen = that.data.mobile.length, clen = that.data.verifycode.length;
    if ( tlen == 11 && clen == 4 ) {
      wx.showLoading({ title: '请稍后' });
      https.req.getVerifyCode()
      .then((res)=>{
        wx.hideLoading();
        var status = res.data.status;
        if ( status == 1 ) {
          console.log('验证成功');
        } else {
          wx.showToast({ title: '网络故障，请稍后重试！', icon: 'none'});
        }
      }).catch((err)=>{
        wx.hideLoading();
        const msg = https.err(err);
        wx.showModal({ showCancel: false, content: msg});
      })
    } else {
      wx.showToast({ title: '请输入正确的手机号和验证码！', icon: 'none'})
    }
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