// pages/coupon/coupon.js
Component({
    data: {
        discounts: '',
    },
    methods: {
        /**
        * 生命周期函数--监听页面加载
        */
        onLoad: function(options) {
            wx.setNavigationBarTitle({
                title: '优惠券兑换'
            });

            // this.setData({
               
            // })
        },
        formSubmit(e) {
            let data = e.detail.value;
            console.log(data);
            wx.request({
                url: '/ceshi', 
                data: data,
                method: 'POST',
                success(res) {
                    console.log(res.data)
                    wx.showToast({
                        title: '操作成功',
                        duration: 2000
                    })
                },
                fail(err) {
                    wx.showToast({
                        title: err.errMsg,
                        icon: "none",
                        duration: 2000
                    })
                }
            })
        }

    }
})