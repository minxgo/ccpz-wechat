const apiUrl = 'http://ht.shanpu.me';

const req = {
    //获取地址列表
    getAddressList(data) {
        const url = `${apiUrl}/coffee/address`;
        return reqs({ url, data});
    },
    //获取登录验证码
    getVerifyCode(data) {
      const url = `${apiUrl}/index/ht_send_code`;
      return reqs({ url, data });
    }
}

/**
 * 提炼错误信息
 */
function errPicker(err) {
    if (typeof err === 'string') return err;
    //后端接口报错/自定义接口的报错，网络错误/未知错误
    return err.msg || err.detail || '未知错误';
}

/**
 * 判断请求状态是否成功
 */
function isHttpSucc(status) {
    return status >= 200 && status < 300 || status === 304;
}

/**
 * 发送请求主体
 */
function reqs( options = {} ) {
    const {
        url,
        data,
        // header,
        dataType,
        responseType,
        success,
        fail,
        complete
    } = options;

    console.log(data)

    const method = 'POST';
    const header = {
      'content-type': "application/json; charset=utf-8"
    }

    return new Promise((res, rej) => {
        wx.request({
            url,
            data,
            header,
            method,
            dataType,
            responseType,
            success(r) {
                const isSucc = isHttpSucc(r.statusCode);
                if (isSucc) {
                    res(r);
                } else {
                    rej ({
                        msg: `错误：${r.statusCode}`,   //后端接口状态错误
                        detail: r   //自定义错误
                    })
                }
            },
            fail (err) {
                rej(err);
            },
            complete
        })
    })
}

module.exports = {
    req: req,
    err: errPicker,
};