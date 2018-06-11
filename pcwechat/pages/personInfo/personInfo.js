Page({
  data:{
    cells: []
  },
  onLoad:function(options){
    var that = this
    wx.getStorage({
      key: 'person_info',
      success: function(res){
        var data = res.data
        var cells = [[],[],[]]
        cells[0].push({title: '姓名', text: data.name == '' ? '未填写' : data.name, access: false, fn: ''})
        cells[0].push({title: '昵称', text: data.nickName == '' ? '未填写' : data.nickName, access: false, fn: ''})     
        cells[0].push({title: '空闲时间', text: data.birthday == '' ? '未填写' : data.birthday, access: false, fn: ''})
        cells[0].push({title: '学校区域', text: data.constellation == '' ? '未填写' : data.constellation, access: false, fn: ''})       
        cells[1].push({title: '手机号码', text: data.tel == '' ? '未填写' : data.tel, access: false, fn: ''})
        that.setData({
          cells: cells
        })
      }
    })
  }
})