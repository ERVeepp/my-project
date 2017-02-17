<template lang="html">
    <div class="six" id="six">
        <div class="six-up dockerbox h-auto-30 h-s-20">
            <div class="four-up-box">
                <div class="fonttitle text-center">
                    {{contents.con.six.a}}
                </div>
            </div>
        </div>
        <div class="six-down container clearfix h-auto-70 h-s-80 col-auto-20 col-l-24">
            <div class="col-auto-8 col-s-24 fl h-auto-100 six-imgbox">
                <div class="siximgbox">
                    <img src="../img/icon1.png" alt="" class="col-auto-8 img">
                    <img src="../img/icon2.png" alt="" class="col-auto-8 img">
                    <img src="../img/icon3.png" alt="" class="col-auto-8 img">
                    <img src="../img/icon4.png" alt="" class="col-auto-8 img">
                    <img src="../img/icon5.png" alt="" class="col-auto-8 img">
                    <img src="../img/icon6.png" alt="" class="col-auto-8 img">
                    <img src="../img/icon7.png" alt="" class="col-auto-8 img">
                    <img src="../img/icon8.png" alt="" class="col-auto-8 img">
                    <img src="../img/icon9.png" alt="" class="col-auto-8 img">
                </div>
            </div>
            <div class="col-auto-8 col-s-24 fr h-auto-100 six-imgbox">
                <div class="siximgbox">
                    <img src="../img/icon10.png" alt="" class="col-auto-8 img">
                    <img src="../img/icon11.png" alt="" class="col-auto-8 img">
                    <img src="../img/icon12.png" alt="" class="col-auto-8 img">
                    <img src="../img/icon13.png" alt="" class="col-auto-8 img">
                    <img src="../img/icon14.png" alt="" class="col-auto-8 img">
                    <img src="../img/icon15.png" alt="" class="col-auto-8 img">
                    <img src="../img/icon16.png" alt="" class="col-auto-8 img">
                    <img src="../img/icon17.png" alt="" class="col-auto-8 img">
                    <img src="../img/icon18.png" alt="" class="col-auto-8 img">
                </div>
            </div>
            <div class="col-auto-8 col-s-24 ib siximgcenterbox pr">
                <div class="siximg-centerbox pr scale-s-7 scale-m-10">
                    <img src="../img/six-iphone.png" alt="" class="six-iphone">
                    <div class="sixbannerbox">
                        <div class="sixbanner-box">
                            <img src="../img/sixbanner1.jpg" alt="" class="sixbannerimg">
                            <img src="../img/sixbanner2.jpg" alt="" class="sixbannerimg">
                            <img src="../img/sixbanner3.jpg" alt="" class="sixbannerimg">
                            <img src="../img/sixbanner4.jpg" alt="" class="sixbannerimg">
                            <img src="../img/sixbanner5.png" alt="" class="sixbannerimg">
                            <img src="../img/sixbanner6.png" alt="" class="sixbannerimg">
                            <img src="../img/sixbanner7.jpg" alt="" class="sixbannerimg">
                            <img src="../img/sixbanner8.jpg" alt="" class="sixbannerimg">
                            <img src="../img/sixbanner9.jpg" alt="" class="sixbannerimg">
                            <img src="../img/sixbanner10.jpg" alt="" class="sixbannerimg">
                            <img src="../img/sixbanner11.jpg" alt="" class="sixbannerimg">
                            <img src="../img/sixbanner12.jpg" alt="" class="sixbannerimg">
                            <img src="../img/sixbanner13.jpg" alt="" class="sixbannerimg">
                            <img src="../img/sixbanner14.jpg" alt="" class="sixbannerimg">
                            <img src="../img/sixbanner15.jpg" alt="" class="sixbannerimg">
                            <img src="../img/sixbanner16.jpg" alt="" class="sixbannerimg">
                            <img src="../img/sixbanner17.jpg" alt="" class="sixbannerimg">
                            <img src="../img/sixbanner18.png" alt="" class="sixbannerimg">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['scroll', 'offsetTop'],
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'contents'
    ])
  },
  methods: {

  },
  mounted: function () {
    var sixbannerimg = document.getElementsByClassName('sixbannerimg')
    function createhover (elem, index) {
      elem.onmouseover = function () {
        // 此处添加鼠标移入函数，即切换图片
        for (var i = 0; i < sixbannerimg.length; i++) {
          sixbannerimg[i].style.display = 'none'
        }
        sixbannerimg[index].style.display = 'block'
      }
    }
    var img = document.getElementsByClassName('img')
    for (var i = 0; i < img.length; i++) {
      createhover(img[i], i)
    }
  },
  watch: {
    scroll: function () {
      if (this.scroll >= this.offsetTop) {
        // console.log(this.scroll)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
    .six{
        background: #fff;
    }
    .sixfooter{
        background: #313131;
    }
    .six-up{
        padding:4rem 0;
    }
    .six-down{
        .siximgcenterbox{
            margin:0 auto;
        }
        .siximg-centerbox{
            width:300px;
            height:300px;
            margin:0 auto;
        }
        .six-iphone{
            width:100%;
            height:auto;
            position: absolute;
            left:0px;
            top:0;
        }
        .sixbannerbox{
            width:300px;
            height:450px;
            padding:0 19px;
            overflow: hidden;
            position: absolute;
            left:3px;
            top:72px;
            img{
                width:100%;
                height:100%;
            }
            .sixbanner-box{
                width:100%;
                height:100%;
                position: relative;
                background:#000;
                img{
                    position: absolute;
                    left:0;
                    top:0;
                    width:100%;
                    height:auto;
                    display: none;
                    &:nth-child(1){
                        display: block;
                    }
                }
            }
        }
        .six-imgbox{
            margin:8rem 0;
        }
        .siximgbox{
            width:270px;
            height:auto;
            margin:0 auto;
            img{
                width:30%;
                padding:1rem;
                height:auto;
                &:hover{
                    cursor: pointer;
                    transition: all 0.2s ease 0;
                    -webkit-transition: all 0.2s ease 0;
                    -moz-transition: all 0.2s ease 0;
                    -ms-transition: all 0.2s ease 0;
                    -o-transition: all 0.2s ease 0;
                    transform: scale(1.3);
                    -webkit-transform: scale(1.3);
                    -moz-transform: scale(1.3);
                    -ms-transform: scale(1.3);
                    -o-transform: scale(1.3);
                }
            }
        }
    }
</style>
