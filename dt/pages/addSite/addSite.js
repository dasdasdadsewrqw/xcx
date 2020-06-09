Component({
    data: {
        region: [],
        detailed: '',
        tag: '',
        tagList: ['家','公司'],
        tagActive: 0,
    },
    methods: {
        /**
         * 生命周期函数--监听页面加载
         */
        onLoad: function(options) {
            wx.setNavigationBarTitle({
                title: '新增地址'
            });
        },
        changeRegin(e) {
                this.setData({
                region: e.detail.value[0]+' - '+e.detail.value[1]+' - '+e.detail.value[2]
            })
        },
        getLocation() {
            let that = this;
            wx.chooseLocation({
                type: 'gcj02',
                success (res) {
                    that.setData({
                        detailed: res.name
                    });
                },
                fail (err) {
                    wx.showToast({
                        title: '获取位置信息失败！',
                        icon: 'none',
                        duration: 1500
                    })
                }
            })
        },
        tagClick(e) {
            let idx = e.target.dataset.idx;
            this.setData({
                tagActive: idx
            });
        },
        tagInput(e) {
            this.setData({
                tag: e.detail.value
            })
        },
        addTag() {
            let tagVal = this.data.tag;
            if(tagVal) {
                this.data.tagList.push(tagVal);
                this.setData({
                    tagList: this.data.tagList,
                    tag: ''
                })
            }
        },
        removeTag() {
            let remTag = this.data.tagList;
            if (remTag.length > 2) {
                this.data.tagList.pop(),
                this.setData({
                    tagList: this.data.tagList,
                })
            }
        },
        formSubmit(e) {
            let data = e.detail.value;
            data['tag'] = this.data.tagActive;
            console.log(data);
        },
        

    }
})