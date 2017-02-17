<template lang="html">
    <div class="two container hw-p" id="two">
        <div class="flex-center col-auto-20 col-s-20 h-auto-30 h-s-20">
            <div class="two-up-box">
                <div class="fonttitle text-center cblod">
                    {{contents.con.two.a}}
                </div>
                <div class="two-fontdescription fontdescription text-center">
                    {{contents.con.two.b}}
                </div>
            </div>
        </div>
        <div class="flex container clearfix dockerbox h-auto-70 h-s-80 col-auto-24 col-xl-20 col-l-24">
            <div class="col-auto-12 fl col-s-24 h-auto-100 h-s-50">
                <div class="two-down-con h-auto-70">
                    <div class="two-down-con-imgbox pr scale-s-8 baseimgbox hwscale">
                        <img src="../img/two1.png" alt="" class="two-img1 pa animatescale" v-bind:class="{animatescale_500ms_0ms:animatescale}">
                        <img src="../img/two2.png" alt="" class="two-img2 pa animatescale" v-bind:class="{animatescale_500ms_2000ms:animatescale}">
                        <img src="../img/two3.png" alt="" class="two-img3 pa animatescale" v-bind:class="{animatescale_500ms_1000ms:animatescale}">
                        <img src="../img/two4.png" alt="" class="two-img4 pa animatescale" v-bind:class="{animatescale_500ms_2000ms:animatescale}">
                        <img src="../img/two5.png" alt="" class="two-img5 pa animatescale" v-bind:class="{animatescale_500ms_500ms:animatescale}">
                        <img src="../img/two6.png" alt="" class="two-img6 pa animatescale" v-bind:class="{animatescale_500ms_1500ms:animatescale}">
                        <img src="../img/two7.png" alt="" class="two-img7 pa animatescale" v-bind:class="{animatescale_500ms_1500ms:animatescale}">
                    </div>
                </div>
                <div class="flex-center h-auto-30 h-s-20 text-center two-fontdescription fontdescription col-s-22 jcstart">
                    <div class="col-auto-22 col-s-24">
                        <span v-text="contents.con.two.c.a"></span><span class="text-blod" v-text="contents.con.two.c.b"></span><span v-text="contents.con.two.c.c"></span><span class="text-blod" v-text="contents.con.two.c.d"></span><span v-text="contents.con.two.c.e"></span>
                    </div>
                </div>
            </div>
            <div class="col-auto-12 fl col-s-24 h-auto-100 h-s-50">
                <div class="two-down-con h-auto-70">
                    <div class="two-down-con-imgbox pr scale-s-8 baseimgbox hwscale">
                        <img src="../img/two8.png" alt="" class="two-img8 pa animatescale" v-bind:class="{animatescale_500ms_0ms:animatescale}">
                        <img src="../img/two9.png" alt="" class="two-img9 pa animatescale" v-bind:class="{animatescale_500ms_0ms:animatescale}">
                        <img src="../img/two10.png" alt="" class="two-img10 pa animatescale" v-bind:class="{animatescale_500ms_1000ms:animatescale}">
                        <img src="../img/two11.png" alt="" class="two-img11 pa animatescale" v-bind:class="{animatescale_500ms_2000ms:animatescale}">
                        <img src="../img/two12.png" alt="" class="two-img12 pa animatescale" v-bind:class="{animatescale_500ms_1000ms:animatescale}">
                        <img src="../img/two13.png" alt="" class="two-img13 pa animatescale" v-bind:class="{animatescale_500ms_1000ms:animatescale}">
                        <img src="../img/two14.png" alt="" class="two-img14 pa animatescale" v-bind:class="{animatescale_500ms_2000ms:animatescale}">
                        <img src="../img/two15.png" alt="" class="two-img15 pa animatescale" v-bind:class="{animatescale_500ms_2000ms:animatescale}">
                        <img src="../img/two16.png" alt="" class="two-img16 pa animatescale" v-bind:class="{animatescale_500ms_500ms:animatescale}">
                        <img src="../img/two17.png" alt="" class="two-img17 pa animatescale" v-bind:class="{animatescale_500ms_500ms:animatescale}">
                        <img src="../img/two18.png" alt="" class="two-img18 pa animatescale" v-bind:class="{animatescale_500ms_500ms:animatescale}">
                        <img src="../img/two19.png" alt="" class="two-img19 pa animatescale" v-bind:class="{animatescale_500ms_1500ms:animatescale}">
                        <img src="../img/two20.png" alt="" class="two-img20 pa animatescale" v-bind:class="{animatescale_500ms_1500ms:animatescale}">
                        <img src="../img/two21.png" alt="" class="two-img21 pa animatescale" v-bind:class="{animatescale_500ms_1500ms:animatescale}">
                    </div>
                </div>
                <div class="flex-center h-auto-30 text-center two-fontdescription fontdescription col-s-22 jcstart">
                    <div class="col-auto-22 col-s-24">
                        <span v-text="contents.con.two.d.a"></span><span class="text-blod" v-text="contents.con.two.d.b"></span><span v-text="contents.con.two.d.c"></span><span class="text-blod" v-text="contents.con.two.d.d"></span><span v-text="contents.con.two.d.e"></span>
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
      flage: true,
      animatescale: false
    }
  },
  computed: {
    ...mapGetters([
      'contents'
    ])
  },
  methods: {

  },
  watch: {
    scroll: function () {
      if (this.flage) {
        if (this.scroll >= this.offsetTop) {
          this.flage = false
          // 此处执行动画
          // console.log(this.scroll)
          this.animatescale = true
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
    .two-fontdescription{
        font-size: 1.6rem;
        padding:1rem 0;
    }
    .two-down-con{
        .two-down-con-imgbox{
            width:300px;
            height:300px;
            margin:0 auto;
        }
        .two-img1{
            width:138px;
            height:auto;
            left:80px;
            top:178px;
            z-index: 2;
        }
        .two-img2{
            width:75px;
            height:auto;
            left:-8px;
            top:159px;
        }
        .two-img3{
            left:69px;
            top:80px;
            z-index: 2;
        }
        .two-img4{
            width:75px;
            height:auto;
            right:-2px;
            top:152px;
        }
        .two-img5{
            left:134px;
            top:103px;
        }
        .two-img6{
            left:33px;
            top:111px;
        }
        .two-img7{
            left:188px;
            top:104px;
        }
        .two-img8{
            width:144px;
            height:auto;
            left:70px;
            top:30px;
        }
        .two-img9{
            width:0;
            left:114px;
            top:51px;
        }
        .two-img10{
            width:57px;
            height:auto;
            left:-20px;
            top:142px;
        }
        .two-img11{
            width:30px;
            height:auto;
            left:67px;
            top:217px;
        }
        .two-img12{
            width:92px;
            height:auto;
            right:78px;
            top:156px;
        }
        .two-img13{
            width:92px;
            height:auto;
            right:-35px;
            top:157px;
        }
        .two-img14{
            width:46px;
            height:auto;
            right:63px;
            top:239px;
        }
        .two-img15{
            width:21px;
            height:auto;
            right:15px;
            top:239px;
        }
        .two-img16{
            left:0px;
            top:85px;
        }
        .two-img17{
            left:102px;
            top:123px;
        }
        .two-img18{
            left:202px;
            top:87px;
        }
        .two-img19{
            left:46px;
            top:173px;
        }
        .two-img20{
            left:226px;
            top:213px;
        }
        .two-img21{
            left:270px;
            top:211px;
        }
    }
</style>
