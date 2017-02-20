<template lang="html">
    <div class="one flex-center cf bgimg">
        <!--fixed定位-->
        <div class="clearfix nav">
            <!--左边的logo-->
            <div class="logo db fl">
                <img src="../img/logo.png" alt="">
            </div>
            <!--右边的内容-->
            <div class="fr nav-right-box flex-center">
                <div class="langcheck navright-box flex-column" v-for="(item,index) in state.contents" @click="changelang($event,item,index)">
                    <div class="navrightbox">
                        <span>{{item.lang}}</span>
                    </div>
                    <div class="navrightbox-border"></div>
                </div>
                <div class="navright-box flex-column">
                    <div class="navrightbox">
                        <a href="http://www.cloudmobi.net/Admin/Login/index">{{contents.con.one.a}}</a>
                    </div>
                    <div class="navrightbox-border"></div>
                </div>
                <div class="navright-box flex-column">
                    <div class="navrightbox" v-on:click="scrollto($event,offsetTopfooter)">
                        <a href="#footer">{{contents.con.one.c}}</a>
                    </div>
                    <div class="navrightbox-border"></div>
                </div>
            </div>
        </div>
        <!--中间内容-->
        <div class="banner text-center col-auto-24">
            <div class="fonttitle cf col-auto-24 menubox col-s-24">
                <div class="col-auto-show col-s-hide">
                    <theater v-bind:choicelang="state.choicelang" v-bind:contents="contents" ></theater>
                </div>
                <div class="col-auto-hide col-s-show">
                    <div class="">
                        {{contents.con.one.da.a}}
                    </div>
                    <div class="">
                        {{contents.con.one.da.b}}
                    </div>
                </div>
            </div>
            <div class="fontdescription cf">
                {{contents.con.one.e}}
            </div>
        </div>
    </div>
</template>

<script>
import theater from './theater.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  props: ['scroll', 'offsetTop', 'offsetTopfooter'],
  data () {
    return {

    }
  },
  computed: {
    state () {
      return this.$store.state
    },
    ...mapGetters([
      'contents'
    ])
  },
  components: {
    theater
  },

  methods: {
    ...mapActions(['increment']),
// 映射 this.increment() 为 this.$store.dispatch('increment')
// ...mapActions ({add:'increment'}),
// 映射 this.add() 为 this.$store.dispatch('increment')
    changelang: function (e, item, index) {
      this.increment(item.id)
// 此处调用action，改变lang的状态
// this.$store.dispatch('increment')
// 此处调用mutations
// store.commit('increment')
// 手动向父组件触发事件
      this.$emit('submitlang', [e, item, index])
// 隐藏语言切换盒子
// var changelangbox=document.getElementsByClassName("changelangbox")[0]
// changelangbox.style.display="none"
    },
    scrollto: function (e, offsetTop) {
// 手动向父组件触发事件
      this.$emit('clickscrollto', [e, offsetTop])
    }
  },
  mounted: function () {

  },
  watch: {
    scroll: function () {
// console.log(this.scroll)
    }
  }
}
</script>
<style lang="scss" scoped>
    .one{
        background-image: url(../img/shouye.jpg);
        position: relative;
        overflow: hidden;
    }
    .one-maskbox{
        width:100%;
        height:100%;
        position:absolute;
        left:0;
        top:0;
        .one-yun{
            width:100%;
            height:auto;
        }
    }
    .yun-box{
        background:rgba(0,0,0,0.5);
    }
    .nav{
        width:100%;
        height:auto;
        padding:1rem 4rem 0 4rem;
        position:absolute;
        left:0;
        top:0;
        background: rgba(0,0,0,0.5);

    }
    .logo{
        width:100px;
        height:auto;
    }
    .navright-box{
        margin:0 5rem 0 0;
    }
    .navright-box:last-child{
        margin:0;
    }
    .navrightbox{
        padding-bottom:1rem;
        cursor: pointer;
    }
    .navrightbox-border{
        width:40px;
        height:3px;
        background:#fff;
        opacity:0;
    }
    .navright-box:hover{
        & .navrightbox-border{
            opacity:1;
        }
    }
    .menubox{
        font-size: 3.6rem;
        font-weight: bold;
        line-height: 1.2;
    }
    .banner{
        height:auto;
    }
</style>
