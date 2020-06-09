// pages/personal/personal.js
//获取应用实例
const app = getApp();
Component({
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
        icbox: [],
    },
    methods: {
        onLoad: function(options) {
            wx.setNavigationBarTitle({
                title: '个人中心'
            });

            let that = this;
            wx.getSetting({
                success(res) {
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
                            loginStatus: false
                        });
                    }
                }
            });

            let iconList = [{
                iconImg: '/static/dzb.png',
                name: '地址簿',
                url: '/pages/siteBook/siteBook',
                astrict: true
            }, {
                iconImg: '/static/yhq.png',
                name: '优惠券',
                url: '/pages/coupon/coupon',
                astrict: true
            }, {
                iconImg: '/static/yqfx.png',
                name: '邀请分享',
                url: '',
                astrict: true
            }, {
                iconImg: '/static/gywm.png',
                name: '关于我们',
                url: '',
                astrict: false
            }, {
                iconImg: '/static/tsybz.png',
                name: '投诉与保障',
                url: '',
                astrict: false
            }, {
                iconImg: '/static/lxkf.png',
                name: '联系客服',
                url: '',
                astrict: true
            }];
            this.setData({
                icbox: this.group(iconList, 4)
            });
        },
        bindGetUserInfo(e) {
            console.log(e.detail.userInfo)
            if (e.detail.userInfo) {
                this.setData({
                    loginStatus: true,
                    userList: e.detail.userInfo
                });
            }
        },

        group: function(array, subGroupLength) {
            let index = 0;
            let newArray = [];
            while (index < array.length) {
                newArray.push(array.slice(index, index += subGroupLength));
            }
            return newArray;
        },

        wxLogon: function() {
            wx.login({
                success(res) {
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

        goLink(el) {
            let toUrl = el.currentTarget.dataset.list.url;
            let astrict = el.currentTarget.dataset.list.astrict;
            if (astrict) { //用户是否已经授权登录
                if (this.data.loginStatus) {
                    wx.navigateTo({
                        url: toUrl,
                    })
                } else {
                    wx.showModal({
                        title: '温馨提示',
                        content: '您还未登录，请先登录后操作！',
                        success(res) {
                            if (res.confirm) {
                                console.log('用户点击确定')
                            } else if (res.cancel) {
                                console.log('用户点击取消')
                            }
                        }
                    })
                }

            } else {
                wx.navigateTo({
                    url: toUrl,
                })
            }
        }

    }
})