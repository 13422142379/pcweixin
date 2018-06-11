// pages/my/my.js
var Bmob = require('../../utils/bmob.js');
var common = require('../../utils/common.js');
var app = getApp();
var grids = [
  {
    "name": "报修", "ico": "baoxiu.png", "url": "../baoxiu/baoxiu"
  },
  { "name": "设置", "ico": "shezhi.png", "url": "../setting/setting" },
  { "name": "报修历史", "ico": "jilu.png", "url": "../history/history" }
];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    grids: grids
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      console.log(userInfo)
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
})