var app = getApp()
Page({
  data: {
    navbar: ['客户端维修', 'Macbook', '苹果双系统', '装系统', '软件维修', '网络调优'],
    currentTab: 0,
    movies: [

      { url: '/images/1.png' },
      { url: '/images/2.png' },
      { url: '/images/3.png' }
    ],
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  a: function () {
    wx.navigateTo({
      url: '/pages/fangfa-details/fangfa-details',
    })
  },
  tabClick: function (e) {
    this.setData({
      activeCategoryId: e.currentTarget.id
    });
    this.getGoodsList(this.data.activeCategoryId);
  },
})
