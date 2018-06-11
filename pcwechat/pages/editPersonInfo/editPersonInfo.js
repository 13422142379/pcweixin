// var util = require('../../util/util');
Page({
  data:{
    name: '',
    nickName: '',
    gender: 0,
    genderArray: ['男', '女'],
    genderIndex: 0,
    age: 0,
    birthday: '',
    constellation: '',
    constellationArray: ['东区','西区'],
    constellationIndex: 0,
    company: '',
    school: '',
    tel: '',
    email:'',
    intro: '',
    birthdayEndDate: ''
  },
  onLoad:function(options){
    var birthdayEndDate = util.getDate()
    var that = this
    wx.getStorage({
      key: 'person_info',
      success: function(res){
        var data = res.data
        that.setData({
          name: data.name,
          nickName: data.nickName,
          gender: data.gender,
          age: data.age,
          birthday: data.birthday,
          constellation: data.constellation,
          tel: data.tel,
          birthdayEndDate: birthdayEndDate
        })
      }
    })
  },
  savePersonInfo: function(e) {
    var data = e.detail.value
    console.log(data);
    wx.setStorage({
      key: 'person_info',
      data: {
        name: data.name,
        nickName: data.nickName,
        gender: data.gender,
        birthday: data.birthday,
        constellation: data.constellation,
        tel: data.tel,
        intro: data.intro
      },
      success: function(res){
        wx.showToast({
          title: '资料修改成功',
          icon: 'success',
          duration: 2000
        })
        setTimeout(function(){
          wx.switchTab({
            url: '../my/my'
          })
        },2000)
      }
    })
  },
  changeGender: function(e) {
    console.log(e)
    var genderIndex = e.detail.value
    if (genderIndex != "null") {
      this.setData({
        genderIndex: genderIndex,
        gender: this.data.genderArray[this.data.genderIndex]
      })
    }
  },
  changeBirthday: function(e) {
    var birthday = e.detail.value
    if (birthday != "null") {
      this.setData(
        {birthday: birthday}
      )
    }
  },
  changeConstellation: function(e) {
    var constellationIndex = e.detail.value
    if (constellationIndex != "null") {
      this.setData({
        constellationIndex: constellationIndex,
        constellation: this.data.constellationArray[this.data.constellationIndex]
      })
    }
  }

})