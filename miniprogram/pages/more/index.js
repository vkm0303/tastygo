// pages/more/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    secondHandIsShow: false,
    healthIsShow: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.cloud.database().collection('hideSomething')
      .doc("secondHand")
      .get({
        success(res) {
          console.log("请求成功", res.data.isShow)
          that.setData({
            secondHandIsShow : res.data.isShow
          })
        },
        fail(res) {
          console.log("请求失败", res)
        }
      })
      wx.cloud.database().collection('hideSomething')
      .doc("healthyRecipes")
      .get({
        success(res) {
          console.log("请求成功", res.data.isShow)
          that.setData({
            healthIsShow : res.data.isShow
          })
        },
        fail(res) {
          console.log("请求失败", res)
        }
      })
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