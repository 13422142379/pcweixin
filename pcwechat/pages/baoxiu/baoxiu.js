var Bmob = require('../../utils/bmob.js');
var common = require('../../utils/common.js');
var app = getApp();
Page({

  data: {
    userInfo: {}

  },
  onLoad: function (options) {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      console.log(userInfo)
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })


    wx.getStorage({
      key: 'person_info',
      success: function (res) {
        var data = res.data
        var cells = [[], [], []]
        cells[0].push({ title: '姓名', text: data.name == '' ? '未填写' : data.name, access: false, fn: '' })
        cells[0].push({ title: '昵称', text: data.nickName == '' ? '未填写' : data.nickName, access: false, fn: '' })      
        cells[0].push({ title: '空闲时间', text: data.birthday == '' ? '未填写' : data.birthday, access: false, fn: '' })
        cells[0].push({ title: '学校区域', text: data.constellation == '' ? '未填写' : data.constellation, access: false, fn: '' })       
        cells[1].push({ title: '手机号码', text: data.tel == '' ? '未填写' : data.tel, access: false, fn: '' })
        that.setData({
          cells: cells
        })
      }
    })
  },

  
  addFeedback: function (event) {
    var that = this;
    var contact = event.detail.value.contact;
    var content = event.detail.value.content;

    if (!contact) {
      common.showTip("请备注具体宿舍楼号", "loading");
      return false;
    }
    else if (!content) {
      common.showTip("请描述大概问题", "loading");
      return false;
    }
    else {
      that.setData({
        loading: true
      })
      var Diary = Bmob.Object.extend("feedback");
      var diary = new Diary();
      diary.set("contact", contact);
      diary.set("content", content);

      //添加数据，第一个入口参数是null
      diary.save(null, {
        success: function (result) {
          // 添加成功，返回成功之后的objectId（注意：返回的属性名字是id，不是objectId），你还可以在Bmob的Web管理后台看到对应的数据
          common.showModal('报修成功，点击确定返回。', '提示', function () {
            wx.navigateBack();
          });
          that.setData({
            loading: false
          })

        },
        error: function (result, error) {
          // 添加失败
          common.showModal('报修失败，请重新报修');

        }
      });
    }

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})