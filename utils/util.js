const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

var app = getApp();

class LoginInfo {
  static login() {
    /**
     * 登录
     */
    return new Promise(()=>{
      var isLogin = app.globalData.isLogin,
      loginMsg = app.globalData.loginMsg;
      if ( !isLogin && loginMsg === null ) {
        wx.request({
          url: 'https://www.easy-mock.com/mock/5bff90ac83499d03bbfbba2f/coffee/login',
          success: function(res) {
            var info = res.data.data;
            app.globalData.isLogin = !0;
            app.globalData.loginMsg = info;
            console.log('succ')
          }
        })
      } else {
        // 已登录
      }
    })
  }
}

// function login() {
  
// }

module.exports = {
  formatTime: formatTime,
  LoginInfo: LoginInfo
}
