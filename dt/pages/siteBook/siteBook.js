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
                title: '地址簿'
            });

            let bookList = [
                {
                    name: '阿祖',
                    tel: '15018505691',
                    company: '积木创意有限公司',
                    site: '深圳市龙华区'
                },{
                    name: '阿祖',
                    tel: '15018505691',
                    company: '积木创意有限公司',
                    site: '深圳市福田区'
                },{
                    name: '阿祖',
                    tel: '15018505691',
                    company: '积木创意有限公司',
                    site: '重庆市九龙坡区'
                }
            ]
            this.setData({
                siteList: bookList
            });
            
        },
        radioChange(e) {
            console.log('radio发生change事件，携带value值为：', e.detail.value)
            const items = this.data.siteList
            for (let i = 0, len = items.length; i < len; ++i) {
                items[i].checked = items[i].value === e.detail.value
            }

            this.setData({
                siteList: items
            })
        }

    }
})