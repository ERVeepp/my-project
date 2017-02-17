<template lang="html">
    <div class="five container cf bgimg hw-p">
        <div class="clearfix col-auto-20 col-m-24 five-box">
            <div class="col-auto-12 fl col-s-24 col-m-24 five-up flex-center h-auto-100 h-m-80">
                <div class="fiveimgbox scale-m-9 scale-s-7 scale-ss-6 ma">
                    <img src="../img/five1.png" alt="" class="five-img1">
                    <img src="../img/five2.png" alt="" class="five-img2 animatescale" v-bind:class="{animatescale_500ms_500ms:animatescale}">
                    <img src="../img/five3.png" alt="" class="five-img3 animatescale" v-bind:class="{animatescale_500ms_500ms:animatescale}">
                    <img src="../img/five4.png" alt="" class="five-img4 animatescale" v-bind:class="{animatescale_500ms_500ms:animatescale}">
                    <img src="../img/five5.png" alt="" class="five-img5 animatescale" v-bind:class="{animaterotate_5000ms_500ms:animaterotate}">
                    <img src="../img/five6.png" alt="" class="five-img6 animatescale" v-bind:class="{animaterotate_5000ms_500ms:animaterotate}">
                    <img src="../img/five7.png" alt="" class="five-img7 animatescale" v-bind:class="{animaterotateAnti_5000ms_500ms:animaterotate}">
                    <img src="../img/five8.png" alt="" class="five-img8 animatescale" v-bind:class="{animatescale_500ms_500ms:animatescale}">
                    <img src="../img/five9.png" alt="" class="five-img9 animatescale" v-bind:class="{animatescale_500ms_500ms:animatescale}">
                </div>
            </div>
            <div class="col-auto-12 fl col-s-24 col-m-24 five-down flex-center h-auto-100 h-m-20 flex-center">
                <div class="fontdescription col-auto-24 col-s-22 col-l-20 col-xs-22 col-m-text-center">
                    <div class="text-left col-auto-24 col-s-text-center five-dec">
                        {{contents.con.five.a}}
                    </div>
                    <div class="text-right col-auto-24 col-s-text-center five-dec">
                        {{contents.con.five.b}}
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
      animatescale: false,
      animaterotate: false
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
      if (this.scroll >= this.offsetTop) {
        // console.log(this.scroll)
        this.animatescale = true
        const that = this
        setTimeout(function () {
          that.animaterotate = true
        }, 500)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
    .five{
        background-image: url(../img/five.png);
    }
    .five-down{
        padding:2rem 0 0 0;
    }
    .five-box{
        height:500px;
    }
    .five-dec{
        padding:1rem 0;
    }
    .fiveimgbox{
        width:300px;
        height:300px;
        //border:1px solid red;
        position: relative;
        img{
            position: absolute;
        }
        .five-img1{
            left:120px;
            top:-75px;
            z-index: 2;
            width:260px;
            height:auto;
        }
        .five-img2{
            left:125px;
            top:229px;
        }
        .five-img3{
            left:100px;
            top:147px;
        }
        .five-img4{
            left:78px;
            top:196px;
        }
        .five-img5{
            left:-18px;
            top:218px;
        }
        .five-img6{
            left:-66px;
            top:171px;
        }
        .five-img7{
            left:-32px;
            top:138px;
        }
        .five-img8{
            left:-78px;
            top:108px;
        }
        .five-img9{
            left:-90px;
            top:95px;
        }
    }
</style>
