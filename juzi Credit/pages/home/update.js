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
    scrollLeft: 0,  //设置偏移量
    

    contactInfo:{ 
           intro:'绑定通讯录您的信用将得到全面的评估!\n请进入设置 - 隐私 - 通讯录 - 桔子信用\n打开权限',
           value: '同意《通讯录授权协议》',
           checked : true
           
           },
    alipayInfo:{ 
            intro:'绑定支付宝您的信用将得到全面的评估!',
            value: '同意《支付宝信息授权协议》',
            checked : true
    
    },
    seasameInfo:{ 
            intro:'同意《芝麻信用信息授权协议》',
            value: '同意《芝麻信用信息授权协议》',
            checked : true
            
    }
    
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
    console.log('左边间距是',leftWidth);
    console.log('总长度是',scrollWidth);
    
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
  
  console.log(index,width);

    this.setData({
              toView: order[index],
              scrollLeft: index * width

            })

    // this.setData({
    //   scrollLeft: this.data.scrollLeft + 9
    //   // scrollLeft: 100
    // })

    // console.log(this.data.scrollLeft);
  },

  //打钩框第一个点击事件
  checkboxOne: function(e) {
   var contactInfo = this.data.contactInfo;
   contactInfo.checked = !contactInfo.checked ;
   this.setData({
     contactInfo:contactInfo
   })

   console.log(contactInfo.checked);
  },
  //打钩框第二个点击事件
  checkboxTwo: function(e) {
   var alipayInfo = this.data.alipayInfo;
   alipayInfo.checked = !alipayInfo.checked ;
   this.setData({
     alipayInfo:alipayInfo
   })

   console.log(alipayInfo.checked);
  },
  //打钩框第三个点击事件
  checkboxThree: function(e) {
   var seasameInfo = this.data.seasameInfo;
   seasameInfo.checked = !seasameInfo.checked ;
   this.setData({
     seasameInfo:seasameInfo
   })

   console.log(seasameInfo.checked);
  },

//  三个按钮不同的点击事件
bindAlipay:function(e) {
    console.log('黄');
},
bindContacts:function(e) {
    console.log('红');
},
bindSeasame:function(e) {
    console.log('蓝');
}


})