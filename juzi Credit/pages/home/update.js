var order = ['red', 'yellow', 'blue', 'green', 'red']


Page({
  data:{
    titles:[
      {
        title:'通讯录',
        url:'../../images/update/tongxunlu_default.png'
      },
      {
        title:'支付宝',
        url:'../../images/update/zhifubao_default.png'
      },
      {
        title:'芝麻信用',
        url:'../../images/update/zhimaxinyong_default.png'
      }

    ],
    toView: 'red',//指定滚动到某个视图
    scrollTop: 200  //设置偏移量
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    wx.setNavigationBarTitle({
      title: '信用提升',
      success: function(res) {
        console.log(res);
      }
    })
  },
  onReady:function(){
    // 页面渲染完成
    
  },
  onShow:function(){
    // 页面显示
    
  },
  onHide:function(){
    // 页面隐藏
    
  },
  onUnload:function(){
    // 页面关闭
    
  },

//滚动到最左边触发
  left: function(e) {
    console.log(e)
  },
  //滚动到最右边触发
  right: function(e) {
    console.log(e)
  },

  //滚动时触发
  scroll: function(e) {
    console.log(e)
  },


  tap: function(e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function(e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})