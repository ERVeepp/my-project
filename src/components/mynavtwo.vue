<template lang="html">
    <div class="mynavtwo container">
        <div class="container col-auto-20 col-s-24">
            <div class="col-auto-8 fl mynavtwo-box" v-for="(item,index) in contents.con.mynavtwo">
                <div class="">
                    <div class="mynavtwo-img"></div>
                    <div class="text-center">{{item.text}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
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

  }
}
</script>
<style lang="scss" scoped>
    .mynavtwo{
        padding:3rem 0;
        background-image: url(../img/mynavtwo.png);
        height:auto;
        font-size: 1.2rem;
        div{
            height:100%;
            a{
                height:100%;
            }
        }
    }
    @for $i from 1 through 3 {
        .mynavtwo-box:nth-child(#{$i}){
            .mynavtwo-img{
                margin:0 auto 1rem;
                width:45px;
                height:45px;
                background-repeat: no-repeat;
                background-size: 100% auto;
                background-image:url(../img/mynavtwo#{$i}.png)
            }
        }
    }
</style>
