const app = getApp()

Page({
  data: {
    // motto: '作者：wzb,ljl',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    movies: [

      { url: '/images/1.png' },
      { url: '/images/2.png' },
      { url: '/images/3.png' }
    ],
    category: [
      {
        "category_id": "1",
        "title": "客户端维修",
        "icon": "/images/category/kehuduan.png",

      },
      {
        "category_id": "2",
        "title": "苹果双系统",
        "icon": "/images/category/pingguo.png"
      },
      {
        "category_id": "3",
        "title": "Macbook",
        "icon": "/images/category/Macbook.png"
      },
      
      {
        "category_id": "4",
        "title": "装系统",
        "icon": "/images/category/xitong.png"
      },
      {
        "category_id": "5",
        "title": "软件维修",
        "icon": "/images/category/ruanjian.png"
      },
      {
        "category_id": "6",
        "title": "网络调优",
        "icon": "/images/category/wangluo.png"
      }

    ]
  },



  //事件处理函数
  1: function () {
    wx.navigateTo({
      url: '/pages/baoxiu/baoxiu',
    })
  },
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else {
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  }
})
