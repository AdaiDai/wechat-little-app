// Page({

// data:{
//     message:'hello kevin',
//     id:'0',
//     condition: true,
//     a:1,
//     b:2,
//     c:3,
//     length : 6,
//     name : 'kevin',
//     zero : 0
// }

// })


// Page({
//   data: {
//     obj1: {
//       a: 1,
//       b: 2
//     },
//     obj2: {
//       c: 3,
//       d: 4
//     }
//   }
// })

// Page({
//   data: {
//     foo: 'my-foo',
//     bar: 'my-bar'
//   }
// })

// Page({
//   data: {
//     items: [{
//       message: 'foo',
//     }, {
//       message: 'bar'
//     }]
//   }
// })

// Page({
//   data: {
//     item: {
//       index: 0,
//       msg: 'this is a template',
//       time: '2016-09-15'
//     }
//   }
// })

// Page({
//   handleTap1: function() {
//     console.log("1")
//   },
//   handleTap2: function() {
//     console.log("2")
//   },
//   handleTap3: function() {
//     console.log("3")
//   }
// })

// Page({
//   bindViewTap:function(event){
//     event.target.dataset.alphaBeta == 1 // - 会转为驼峰写法
//     event.target.dataset.alphabeta == 2 // 大写会转为小写
//   }
// })

Page({
  data: {
    animationData: {}
  },
  onShow: function(){
    var animation = wx.createAnimation({
      duration: 1000,
        timingFunction: 'ease',
    })

    this.animation = animation

    animation.scale(2,2).rotate(45).step()

    this.setData({
      animationData:animation.export()
    })

    setTimeout(function() {
      animation.translate(30).step()
      this.setData({
        animationData:animation.export()
      })
    }.bind(this), 1000)
  },
  rotateAndScale: function () {
    // 旋转同时放大
    this.animation.rotate(45).scale(2, 2).step()
    this.setData({
      animationData:animation.export()
    })
  },
  rotateThenScale: function () {
    // 先旋转后放大
    this.animation.rotate(45).step()
    this.animation.scale(2, 2).step()
    this.setData({
      animationData:animation.export()
    })
  },
  rotateAndScaleThenTranslate: function () {
    // 先旋转同时放大，然后平移
    this.animation.rotate(45).scale(2, 2).step()
    this.animation.translate(100, 100).step({ duration: 1000 })
    this.setData({
      animationData:animation.export()
    })
  }
})

