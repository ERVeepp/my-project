<template lang="html">
    <nav class="mynav col-m-hide col-s-hide">
        <div class="container col-auto-20 col-l-24">
            <div class="col-auto-8 fl" v-on:click="scrollto($event,offsetToptwo)">
                <a href="#two" class="flex-center db nav-btn">
                    <span class="nav-img-a db"></span>
                    <span>{{contents.con.one.mynav.a}}</span>
                </a>
            </div>
            <div class="col-auto-8 fl" v-on:click="scrollto($event,offsetTopfour)">
                <a href="#four" class="flex-center db nav-btn">
                    <span class="nav-img-b db"></span>
                    <span>{{contents.con.one.mynav.b}}</span>
                </a>
            </div>
            <div class="col-auto-8 fl" v-on:click="scrollto($event,offsetTopsix)">
                <a href="#six" class="flex-center db nav-btn">
                    <span class="nav-img-c db"></span>
                    <span>{{contents.con.one.mynav.c}}</span>
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {

    }
  },
  props: ['offsetToptwo', 'offsetTopfour', 'offsetTopsix'],
  computed: {
    ...mapGetters([
      'contents'
    ])
  },
  methods: {
    scrollto: function (e, offsetTop) {
      // 手动向父组件触发事件
      this.$emit('clickscrollto', [e, offsetTop])
    }
  }
}
</script>
<style lang="scss" scoped>
    $height:100px;
    nav{
        height:$height;
        font-size: 1.6rem;
    }
    .mynav{
        background: #fff;
    }
    .nav-btn{
        color:#919191;
        height:$height;
        @mixin navimg($selector) {
            .nav-img-#{$selector}{
                width:132px;
                height:96px;
                background-image: url(../img/nav-#{$selector}.png);
                background-size: 100% auto;
            }
            span{
                margin:0.5rem 0;
                color:#919191;
            }
            &:hover{
                color:#000;
                font-weight: bold;
                & .nav-img-#{$selector}{
                    background-image: url(../img/nav-#{$selector}-choice.png);
                }
                & span{
                    color:#313131;
                }
            }
        }
        @include navimg("a");
        @include navimg("b");
        @include navimg("c");
    }

</style>
