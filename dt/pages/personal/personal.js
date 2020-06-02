// pages/personal/personal.js
//获取应用实例
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userList: {
      avatarUrl: 'http://up.enterdesk.com/edpic/d5/85/f4/d585f486048d9e8ac43b55bc389a709c.jpg',
    },
    vip: '青铜选手',
    integral: '2000',
    ddNumber: '2000',
    ddName: '订单数量',
    xdMoney: '60000',
    xdTitle: '下单金额',
    loginStatus: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '个人中心'
    });
    let that = this;
    wx.getSetting({
      success (res){
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function(res) {
              that.setData({
                loginStatus: true,
                userList: res.userInfo
              });
              console.log(res.userInfo)
            }
          })
        } else {
          console.log('未授权');
          that.setData({
            loginStatus:false
          });
        }
      }
    })
  },
  bindGetUserInfo (e) {
    console.log(e.detail.userInfo)
    if (e.detail.userInfo) {
      this.setData({
        loginStatus: true,
        userList: e.detail.userInfo
      });
    }
  },

  wxLogon: function() {
    wx.login({
      success (res) {
        console.log(res.code);
        // if (res.code) {
        //   //发起网络请求
        //   wx.request({
        //     url: 'https://test.com/onLogin', 
        //     data: {code: res.code},
        //   })
        // } else {
        //   console.log('登录失败！' + res.errMsg)
        // }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})