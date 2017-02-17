<template lang="html">
    <div class="three container bgimg hw-p">
        <div class="dockerbox threetitle h-auto-30 h-s-20">
            <div class="text-center fonttitle">
                {{contents.con.three.a}}
            </div>
        </div>
        <div class="dockerbox container threeBox h-auto-70 h-s-70 col-s-24 col-l-20 col-xl-16">
            <div class="col-auto-8 col-s-12 threebox h-auto-50 h-s-33 fl">
                <div class="three-box text-center">
                    <img src="../img/three1.png" alt="" class="threeicon">
                    <div class="threea">
                        <span v-text="contents.con.three.b.a.a"></span>
                    </div>
                    <div class="threeb">
                        <tweennum v-bind:gonum="contents.con.three.b.a.b" v-bind:scroll="scroll" v-bind:offsetTop="offsetTop">
                        </tweennum><span v-text="contents.con.three.b.a.c"></span>
                    </div>
                    <div class="threea">
                        <span v-text="contents.con.three.b.a.d"></span>
                    </div>
                </div>
            </div>
            <div class="col-auto-8 col-s-12 threebox h-auto-50 h-s-33 fl">
                <div class="three-box text-center">
                    <img src="../img/three2.png" alt="" class="threeicon">
                    <div class="threea">
                        <span v-text="contents.con.three.b.b.a"></span>
                    </div>
                    <div class="threeb">
                        <tweennum v-bind:gonum="contents.con.three.b.b.b" v-bind:scroll="scroll" v-bind:offsetTop="offsetTop">
                        </tweennum><span v-text="contents.con.three.b.b.c"></span>
                    </div>
                    <div class="threea">
                        <span v-text="contents.con.three.b.b.d"></span>
                    </div>
                </div>
            </div>
            <div class="col-auto-8 col-s-24 threebox h-auto-50 h-s-33 fl">
                <div class="three-box text-center">
                    <img src="../img/three3.png" alt="" class="threeicon">
                    <div class="threea">
                        <span v-text="contents.con.three.b.c.a"></span>
                    </div>
                    <div class="threeb">
                        <tweennum v-bind:gonum="contents.con.three.b.c.b" v-bind:scroll="scroll" v-bind:offsetTop="offsetTop">
                        </tweennum><span v-text="contents.con.three.b.c.c"></span>
                    </div>
                    <div class="threea">
                        <span v-text="contents.con.three.b.c.d"></span>
                    </div>
                </div>
            </div>
            <div class="col-auto-12 col-s-12 threebox h-auto-50 h-s-33 fl">
                <div class="three-box text-center">
                    <img src="../img/three4.png" alt="" class="threeicon">
                    <div class="threea">
                        <span v-text="contents.con.three.b.d.a"></span>
                    </div>
                    <div class="threeb">
                        <tweennum v-bind:gonum="contents.con.three.b.d.b" v-bind:scroll="scroll" v-bind:offsetTop="offsetTop">
                        </tweennum><span v-text="contents.con.three.b.d.c"></span>
                    </div>
                    <div class="threea">
                        <span v-text="contents.con.three.b.d.d"></span>
                    </div>
                </div>
            </div>
            <div class="col-auto-12 col-s-12 threebox h-auto-50 h-s-33 fl">
                <div class="three-box text-center">
                    <img src="../img/three5.png" alt="" class="threeicon">
                    <div class="threea">
                        <span v-text="contents.con.three.b.e.a"></span>
                    </div>
                    <div class="threeb">
                        <tweennum v-bind:gonum="contents.con.three.b.e.b" v-bind:scroll="scroll" v-bind:offsetTop="offsetTop">
                        </tweennum><span v-text="contents.con.three.b.e.c"></span>
                    </div>
                    <div class="threea">
                        <span v-text="contents.con.three.b.e.d"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import tweennum from './tweennum.vue'
export default {
  props: ['scroll', 'offsetTop'],
  data () {
    return {
      num: 0
    }
  },
  computed: {
    ...mapGetters(['contents'])
  },
  components: {
    tweennum
  },
  methods: {

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
    .three{
        background-image: url(../img/three.png);
    }
    .threebox{
        padding:2rem 0;
    }
    .three-box{
        height:100%;
    }
    .threeicon{
        width:30px;
        height:30px;
        margin:1rem 0;
    }
    .threea{
        font-size: 1.8rem;
        min-width:1px;
        height:2rem;
    }
    .threeb{
        font-size: 3rem;
        font-weight: bold;
        color:#313131;
    }
    .numberbox{
        font-family: Arial;
    }
</style>
