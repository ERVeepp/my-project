<template lang="html">
    <footer class="footer" id="footer">
        <div class="container text-center dockerbox footerbox h-auto-90 col-auto-20 col-l-24">
            <div class="fl col-s-12 col-m-12 col-ss-24 footer-box" v-for="(item,index) in contents.con.footer">
                <div class="clearfix col-l-14 col-m-14 col-s-24 col-ss-14">
                    <div class="footericon fl"></div>
                    <div class="footercon fl text-left">
                        <div class="footer-title">
                            {{item.a}}
                        </div>
                        <div class="footer-title-border"></div>
                        <div class="">
                            {{item.b}}
                        </div>
                        <div class="">
                            {{item.c}}
                        </div>
                        <div class="">
                            {{item.d}}
                        </div>
                        <div class="">
                            {{item.e}}
                        </div>
                        <div class="">
                            {{item.f}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footerdown h-auto-10">
            <div class="footerborder"></div>
            <div class="footer-down text-center container">
                <span>Copyright © 2016 Cloudmobi.com | All Rights Reserved</span>
            </div>
        </div>
    </footer>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'contents'
    ])
  }
}
</script>

<style lang="scss" scoped>
    footer{
        & *{
            user-select:auto;
            -webkit-user-select:auto;
        }
        color:#adadad;
        background: #414141;
        font-size: 1.2rem;
        .footerbox{
            padding-top:5rem;
        }
        .footer-box{
            width:20%;
            margin-bottom:2rem;
            @for $i from 1 through 5 {
                &:nth-child(#{$i}){
                    .footericon{
                        width:18px;
                        height:30px;
                        margin:0 1rem;
                        background-size: 100% auto;
                        background-repeat: no-repeat;
                        background-image:url(../img/footer-icon#{$i}.png);
                    }
                }
            }
        }
        .footerborder{
            width:90%;
            margin:0 auto;
            height:2px;
            background: #444;
        }
        .flex-flex-start{
            align-items: flex-start;
            img{
                margin:0 0.5rem;
            }
        }
        .footer-title{
            color:#fff;
            width:100%;
            text-align: left;
        }
        .footer-title-border{
            width:50px;
            height:3px;
            background: #3388ff;
        }
        .footer-down{
            padding:1rem 0;
        }
        .footercon{
            width:auto;
            div{
                margin:0 0 0.7rem 0;
            }
        }
    }
</style>
