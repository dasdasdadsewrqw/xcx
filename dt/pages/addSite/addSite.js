Component({
    data: {
        siteList: [],
    },
    methods: {
        /**
         * 生命周期函数--监听页面加载
         */
        onLoad: function(options) {
            wx.setNavigationBarTitle({
                title: '新增地址'
            });

            this.setData({
                siteList: bookList
            });
            
        },
        

    }
})