var order = ['red', 'yellow', 'blue']


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
    scrollLeft: 0  //设置偏移量
  },

  //加载参数 设置名字
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    wx.setNavigationBarTitle({
      title: '信用提升',
      success: function(res) {
        console.log(res);
      }
    })
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
    //  console.log(e.detail)
    var scrollWidth = e.detail.scrollWidth;
    var length = this.data.titles.length;
    var  width = scrollWidth / length;
    var leftWidth = e.detail.scrollLeft;
     var index = Math.round(leftWidth / width);
    this.tapMove(index,width)
    
    
  },


//老的按钮留下来的方法
  tap: function(index) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  
  
  tapMove: function(index,width) {
  
  console.log(index);
    this.setData({
              toView: order[index],
              scrollLeft: index * width

            })

    // this.setData({
    //   scrollLeft: this.data.scrollLeft + 9
    //   // scrollLeft: 100
    // })

    // console.log(this.data.scrollLeft);
  }
})