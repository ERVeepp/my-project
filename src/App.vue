<template>
    <div id="app" class="cursorurl container">
        <one v-on:clickscrollto="scrollto" v-bind:scroll="scroll" v-bind:offsetTop="offsetTopone" v-bind:offsetTopfooter="offsetTopfooter" v-on:submitlang="changelang"></one>
        <mynav v-on:clickscrollto="scrollto" v-bind:offsetToptwo="offsetToptwo" v-bind:offsetTopfour="offsetTopfour" v-bind:offsetTopsix="offsetTopsix"></mynav>
        <two v-bind:scroll="scroll" v-bind:offsetTop="offsetToptwo"></two>
        <three v-bind:scroll="scroll" v-bind:offsetTop="offsetTopthree"></three>
        <four v-bind:scroll="scroll" v-bind:offsetTop="offsetTopfour"></four>
        <mynavtwo></mynavtwo>
        <five v-bind:scroll="scroll" v-bind:offsetTop="offsetTopfive"></five>
        <six v-bind:scroll="scroll" v-bind:offsetTop="offsetTopsix"></six>
        <myfooter></myfooter>
    </div>
</template>
<script>
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 加载vuex
Vue.use(Vuex)
// 引入store
import store from './store'
// console.log(store)
// 全局css
Vue.config.debug = true
//
import './css/base.scss'
// js组件
// import theater from './components/theater.vue'
// import tweennum from './components/tweennum.vue'
// 页面组件
import one from './components/one.vue'
import mynav from './components/mynav.vue'
import two from './components/two.vue'
import three from './components/three.vue'
import four from './components/four.vue'
import mynavtwo from './components/mynavtwo.vue'
import five from './components/five.vue'
import six from './components/six.vue'
import myfooter from './components/myfooter.vue'
//
export default{
  store,
  data () {
    return {
      scroll: 0,
      offsetTopone: 0,
      offsetToptwo: 0,
      offsetTopthree: 0,
      offsetTopfour: 0,
      offsetTopfive: 0,
      offsetTopsix: 0,
      offsetTopfooter: 0
    }
  },
  components: {
    one,
    mynav,
    two,
    three,
    four,
    mynavtwo,
    five,
    six,
    myfooter
  },
  computed: {

  },
  mounted: function () {
    // 设置容器的高度
    this.setheight()
    // 实时获取scrolltop的值
    this.getscrolltop()
    // 调用语言判断
    this.judelang()
  },
  methods: {
    // 设置容器的高度
    setheight: function () {
      let vm = this
      // 获取当前window的宽
      let windoww = window.innerWidth
      // 获取当前window的高
      let windowh = window.innerHeight
      // 获取nav的高
      let navh = document.querySelector('nav').offsetHeight
      let windowheight = document.getElementsByClassName('windowheight')
      let one = document.getElementsByClassName('one')
      let two = document.getElementsByClassName('two')
      let three = document.getElementsByClassName('three')
      let four = document.getElementsByClassName('four')
      let five = document.getElementsByClassName('five')
      let six = document.getElementsByClassName('six')
      let footer = document.getElementsByClassName('footer')
      let baseimgbox = document.getElementsByClassName('baseimgbox')
      let hwscale = document.getElementsByClassName('hwscale')
      //
      one[0].style.height = (windowh - navh) + 'px'
      //
      var sizel = 1200
      var sizem = 980
      var sizes = 760

      // 竖屏
      if (windoww < windowh) {
        // console.log(windoww)
        // console.log("竖屏")
        // 小于s
        if (windoww <= sizes) {
          for (var i = 0; i < windowheight.length; i++) {
            windowheight[i].style.height = windowh + 'px'
          }
        // 小于m，大于s
        } else if (windoww > sizes && windoww <= sizem) {

        // 小于l，大于m
        } else if (windoww > sizem && windoww <= sizel) {

        // 大于l
        } else if (windoww > sizel) {

        }
      } else {
      // 横屏
        // console.log(windoww)
        // console.log("横屏")
        // 小于s
        if (windoww <= sizes) {
          for (var i1 = 0; i1 < baseimgbox.length; i1++) {
            baseimgbox[i1].style.height = '300px'
          }
          for (var i2 = 0; i2 < hwscale.length; i2++) {
            hwscale[i2].style.cssText = '-webkit-transform: scale(1);-moz-transform: scale(1);-ms-transform: scale(1);-o-transform: scale(1);transform: scale(1);height:300px;'
          }
        // 小于m，大于s
        } else if (windoww > sizes && windoww <= sizem) {
          for (var i3 = 0; i3 < windowheight.length; i3++) {
            windowheight[i3].style.height = windowh + 'px'
          }
        // 小于l，大于m
        } else if (windoww > sizem && windoww <= sizel) {
          for (var i4 = 0; i4 < windowheight.length; i4++) {
            windowheight[i4].style.height = windowh + 'px'
          }
        // 大于l
        } else if (windoww > sizel) {
          for (var i5 = 0; i5 < windowheight.length; i5++) {
            windowheight[i5].style.height = windowh + 'px'
          }
        }
      }
      // 获取当前页面相对于document最顶部的距离
      vm.offsetTopone = one[0].offsetTop
      vm.offsetToptwo = two[0].offsetTop
      vm.offsetTopthree = three[0].offsetTop
      vm.offsetTopfour = four[0].offsetTop
      vm.offsetTopfive = five[0].offsetTop
      vm.offsetTopsix = six[0].offsetTop
      vm.offsetTopfooter = footer[0].offsetTop
    },
    // 实时获取scrolltop的值
    getscrolltop: function () {
      let vm = this
      // IE注册事件
      if (document.attachEvent) {
        document.attachEvent('onmousewheel', scrollFunc)
      }
      // Firefox注册事件
      if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', scrollFunc, false)
      }
      // IE/Opera/Chrome
      window.onmousewheel = document.onmousewheel = scrollFunc
      // 移动端注册事件
      document.addEventListener('touchmove', scrollFunc, false)
      document.addEventListener('touchend', scrollFunc, false)
      // 获取scrolltop函数
      function scrollFunc () {
        let scrolltop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        scrolltop = parseInt(scrolltop) + 250
        vm.$set(vm, 'scroll', scrolltop)
        // 判断是否是苹果手机的微信打开的页面
        var ua = navigator.userAgent.toLowerCase()
        // console.log(ua)
        if (ua.match(/MicroMessenger/i) === 'micromessenger') {
          // 是微信打开
          vm.scroll = 10000
        }
      }
      scrollFunc()
    },
    changelang: function (arr) {
      // 改变语言
      // console.log(arr[2])
      this.judelang()
    },
    judelang: function () {
      // 页面元素样式调整
      // 改变font-family
      var body = document.body
      var menubox = document.getElementsByClassName('menubox')[0]
      // 读取localstorage的lang的值，假如没值的话,把state中的choicelang设置为localstorage的lang的值
      let lang = localStorage.getItem('lang')
      // console.log(lang)
      // console.log(this.$store.state.choicelang)
      // 如果本地没有
      if (!lang) {
        // 第一次打开，默认为英文
        let statelang = this.$store.state.choicelang
        localStorage.setItem('lang', statelang)
      } else {
        this.$store.state.choicelang = lang
      }
      // console.log(this.$store.state.state.choicelang)
      if (this.$store.state.choicelang === '1') {
        // 说明是汉语
        body.style.fontFamily = 'Microsoft Yahei'
        menubox.style.cssText = 'width:100% !important;'
      } else {
        // 说明是其他语言
        body.style.fontFamily = 'Arial'
        let windoww = window.innerWidth
        if (windoww <= 560) {
          menubox.style.cssText = 'width:230px !important;'
        } else {
          menubox.style.cssText = 'width:100%;'
        }
      }
    },
    // 页面滚动
    // window.scrollTo
    scrollto: function (arr) {
      var ev = arr[0]
      var offsetTop = arr[1]
      if (window.scrollTo) {
        // console.log(offsetTop)
        // 阻止浏览器默认行为
        ev.preventDefault()
        window.scrollTo(0, offsetTop)
      }
    }
  },
  watch: {
    scroll: function () {
      // console.log(this.scroll)
      // 如果滚动了，却没有触发scroll改变，这里就该行动了

    }
  }
}
</script>
<style lang="scss">
.bgimg1{
    background-size:100% auto;

}
#app{
    -webkit-overflow-scrolling : touch;
}
// 自定义鼠标样式
.cursorurl{
    // cursor:url('./img/thislogo.png'), default;
    // cursor:url('../dist/thislogo.png'), default;
}
.aistart{
    justify-content: flex-start !important;

}
.jcstart{
    align-items: flex-start !important;

}
.fonttitle{
    font-size: 4rem;
    padding:1rem 0;
}
.fontdescription{
    font-size: 2rem;
}
.bg31{
    background: #313131;
}
.cblod{
    color:#313131;
}
.hw-p{
    padding:8rem 0;
}
.hw-p-top{
    padding:8rem 0 0 0;
}
//屏幕尺寸
$size-l:1200px;
$size-m:980px;
$size-s:760px;
$size-ss:370px;
//
@media screen and (max-width:$size-l) {
    .footer-box{
        width:50% !important;
    }
}
@media screen and (max-width:$size-m) {
    .footer-box{
        width:50% !important;
    }
    .siximg-centerbox{
        width:250px !important;
    }
    .sixbannerbox{
        width:250px !important;
        padding: 0 15px !important;
        top: 60px !important;
    }
    .six-imgbox{
        margin:5rem 0 !important;
    }
}
@media screen and (max-width:$size-s) {
    .fonttitle{
        font-size: 2.6rem;
    }
    .fontdescription{
        font-size: 1.4rem !important;
        div{
            padding:0;
        }
    }
    .threea{
        font-size: 1.4rem !important;
    }
    .threeb{
        font-size: 2.6rem !important;
    }
    .nav{
        padding: 1rem 1.5rem 0 1.5rem !important;
        .navright-box{
            margin:0 1rem 0 0 !important;
        }
        .navright-box:last-child{
            margin:0 !important;
        }
        .navrightbox-border{
            display: none;
        }
    }
    .five-dec{
        padding:0;
    }
    .six-imgbox{
        height:auto !important;
    }
    .siximgbox{
        width:150px !important;
        img{
            padding:0.5rem !important;
        }
    }
    .siximg-centerbox{
        height:300px !important;
    }
    .six-imgbox{
        margin:0 !important;
    }
    .hw-p{
        padding:4rem 0;
    }
    .logo{
        width:80px !important;
    }
    .threebox{
        padding:1rem 0 !important;
    }
    .four-down-right-box{
        margin-top:4rem !important;
    }
    .fiveimgbox{
        margin-top:4rem !important;
    }
}
@media screen and (max-width:$size-ss) {
    .nav{
        padding: 1rem 1rem 0 1rem !important;
        .navright-box{
            margin:0 0.5rem 0 0 !important;
        }
        .navright-box:last-child{
            margin:0 !important;
        }
        .navrightbox-border{
            display: none;
        }
    }
    .footericon{
        margin:0 1rem 0 2rem !important;
    }
    .col-s-text-center{
        text-align: center !important;
    }
    .four-down{
        height:400px !important;
    }
}
// css3动画
@keyframes animatescale {
    0%{
        transform: scale(0);
    }
    50%{
        transform: scale(1.1);
    }
    100%{
        transform: scale(1);
    }
}
@keyframes animaterotate {
    0%{
        transform: scale(1);
        transform:rotateZ(0deg);
    }
    100%{
        transform: scale(1);
        transform:rotateZ(360deg);
    }
}
@keyframes animaterotateAnti {
    0%{
        transform: scale(1);
        transform:rotateZ(0deg);
    }
    100%{
        transform: scale(1);
        transform:rotateZ(-360deg);
    }
}
// 动画名称，动画用时，动画速度曲线，动画开始延迟，动画播放次数，是否应该轮流反向播放动画，动画结束后保存状态
@mixin animate($name,$duration,$timingfunction,$delay,$iterationcount,$direction,$fillmode) {
    .#{$name}_#{$duration}ms_#{$delay}ms{
        animation: #{$name} #{$duration}ms #{$timingfunction} #{$delay}ms #{$iterationcount} #{$direction} #{$fillmode};
    }
}
.animatescale{
    transform: scale(0);
}
@for $i from 0 through 10 {
    @for $j from 0 through 10 {
        @include animate("animatescale",$i*500,"ease",$j*500,"","","forwards");
        @include animate("animaterotate",$i*500,"linear",$j*500,"infinite","","forwards");
        @include animate("animaterotateAnti",$i*500,"linear",$j*500,"infinite","","forwards");
    }
}
// 禁止被选中
*{
    user-select:none;
    -webkit-user-select:none;
}
</style>
