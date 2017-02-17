<template lang="html">
    <div class="four container bgimg hw-p" id="four">
        <div class="four-up col-s-22">
            <div class="fonttitle text-center cf">
                {{contents.con.four.a}}
            </div>
            <div class="fontdescription text-center cf">
                {{contents.con.four.b}}
            </div>
        </div>
        <div class="clearfix cf dockerbox col-auto-20 col-s-22 four-down">
            <div class="col-auto-12 fr col-m-24 flex-center four-down-right h-auto-100 h-m-80 h-ss-70">
                <div class="four-down-right-box ma scale-s-7 scale-m-8 scale-ss-6">
                    <img src="../img/four1.png" alt="" class="four-img1">
                    <img src="../img/four2.png" alt="" class="four-img2 animatescale" v-bind:class="{animatescale_3000ms_1000ms:animatescale}">
                    <img src="../img/four3.png" alt="" class="four-img3 animatescale" v-bind:class="{animatescale_500ms_500ms:animatescale}">
                    <img src="../img/four4.png" alt="" class="four-img4 animatescale" v-bind:class="{animatescale_500ms_500ms:animatescale}">
                </div>
            </div>
            <div class="col-auto-12 col-m-24 fr flex-center fourbox text-center four-down-left h-auto-100 h-m-20 h-ss-30">
                <div class="fontdescription col-auto-24 col-s-24 col-m-24 text-left col-s-text-center col-m-text-center">{{contents.con.four.c}}</div>
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
    ...mapGetters(['contents'])
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
    .four{
        background-image: url(../img/four.png);
    }
    .four-up{
        padding:0 0 2rem 0;
    }
    .four-down{
        height:500px;
    }
    .four-down-left{

    }
    .four-down-right{
        .four-down-right-box{
            width:300px;
            height:300px;
            //border:1px solid red;
            position: relative;
            img{
                position: absolute;
            }
            .four-img1{
                left:-100px;
                top:-80px;
                z-index: 2
            }
            .four-img2{
                left:0;
                top:-40px;
                z-index: 1
            }
            .four-img3{
                left:167px;
                top:127px;
                z-index: 1
            }
            .four-img4{
                left:-61px;
                top:15px;
                z-index: 2
            }
        }
    }
</style>
