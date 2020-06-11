// pages/coupon/coupon.js
Component({
    data: {
        headIdx: 0,
        unused: [],
        used: [],
        winHeight: 0,
    },
    methods: {
        /**
        * 生命周期函数--监听页面加载
        */
        onLoad: function(options) {
            var that = this;
            wx.setNavigationBarTitle({
                title: '优惠券'
            });

            wx.getSystemInfo({
                success: function(res) {
                    that.setData({
                        winHeight: res.windowHeight
                    });
                }
            });

            let unuseds = ['待使用 1','待使用 2','待使用 3','待使用 4','待使用 5','待使用 6','待使用 7','待使用 8','待使用 9','待使用 10','待使用 11','待使用 12'];
            let useds = ['已使用 1','已使用 2','已使用 3'];
            this.setData({
                unused: unuseds,
                used: useds
            })
        },
        couponHead(e) {
            let idx = e.currentTarget.dataset.index;
            this.setData({
                headIdx: idx
            })
        },
        bindChange(e) {
            if(e.detail.source == 'touch'){  
                this.setData({ 
                    headIdx: e.detail.current 
                });
            }
        },
        couponLink(){
            wx.navigateTo({
                url: '/pages/conversion/conversion',
            })
        }

    }
})