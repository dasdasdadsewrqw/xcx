// pages/coupon/coupon.js
Component({
    data: {
        
    },
    methods: {
        /**
        * 生命周期函数--监听页面加载
        */
        onLoad: function(options) {
            wx.setNavigationBarTitle({
                title: '邀请奖励'
            });
            // this.setData({
               
            // })
        },
        onShareAppMessage:function(res) {
            if (res.from == 'button') {
                console.log(res.target, res)
            }
            return {
              title:'分享小程序给好友',
              path:'/pages/index/index?id=123',//这里是被分享的人点击进来之后的页面
              imageUrl: ''//这里是图片的路径
            }
        },
    }
})