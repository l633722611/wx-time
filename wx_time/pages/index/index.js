Page({
  /* 页面的初始数据*/
  data: {
    cateArr:[
      {icon:"work",text:"工作",id:1},
      {icon:"study",text:"学习",id:2},
      {icon:"think",text:"思考",id:3},
      {icon:"write",text:"写作",id:4},
      {icon:"read",text:"阅读",id:5},
      {icon:"play",text:"休息",id:6},
    ],
    workTime:20,
    num:0,
    taskname:"",
  },
  // 修改时间
  changeWorkTime:function(e){ 
    this.setData({
      workTime:e.detail.value
    })
  },
  // 选择任务类型
  select:function(e){
    this.setData({
      num:e.currentTarget.dataset.id
    })
  },
  changeLogName:function(e){
    this.setData({
      taskname:e.detail.value
    })
  },
  totask: function(e){
    var workTime = this.data.workTime;
    var id=this.data.num;
    var taskname=this.data.taskname;
    wx.navigateTo({
      url: '../task/task?id='+id+'&workTime='+workTime+'&taskname='+taskname
    })
  },
  /*生命周期函数--监听页面加载*/
  onLoad: function (options) {
    
  },

  /*生命周期函数--监听页面初次渲染完成*/
  onReady: function () {
    
  },

  /* 生命周期函数--监听页面显示*/
  onShow: function () {
    
  },

  /* 生命周期函数--监听页面隐藏 */
  onHide: function () {
    
  },

  /* 生命周期函数--监听页面卸载*/
  onUnload: function () {
    
  },

  /*页面相关事件处理函数--监听用户下拉动作 */
  onPullDownRefresh: function () {
    
  },

  /*页面上拉触底事件的处理函数*/
  onReachBottom: function () {
    
  },

  /*用户点击右上角分享*/
  onShareAppMessage: function () {
    
  }
})