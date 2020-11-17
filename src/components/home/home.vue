<template>
  <div id="home">
    <div class="head">
        平价租车
        <img src="./image/home_head.png" alt="" @click="btn">
    </div>
    <div class="baidu">
        <baidu></baidu>
    </div>
    <div class="home_shop">
        <div class="home_shop_head">
            <router-link to="inland" tag="div" class="home_shop_head_left">
                国内租车
            </router-link>
            <router-link to="overseas" tag="div" class="home_shop_head_right">
                境外租车
            </router-link>
        </div>
        <router-view></router-view>
    </div>
    <personal v-show="isshow"></personal>
  </div>
</template>

<script>
import baidu from './MapVGL'
import personal from './personal'
export default {
  props: {},
  data() {
    return {
        isshow:false
    };
  },
  methods: {
    btn(){
        this.isshow = !this.isshow
    }
  },
  components: {
      personal,
      baidu
  },
  mounted() {
    
  },
};
</script>

<style scoped lang="less">
#home{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    .head{
        margin-top: .4rem;
        height: .62rem;
        line-height: .62rem;
        text-align: center;
        font-size: .32rem;
        font-weight: bolder;
        padding: 0 .24rem;
        position: relative;
        box-sizing: border-box;
        img{
            width: .3rem;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: .24rem;
        }
    }
    .baidu{
        width: 100%;
    }
    .home_shop{
        height: 6.25rem;
        .home_shop_head{
            height: .88rem;
            position: relative;
            font-size: .32rem;
            div{
                height: 100%;
                width: 50%;
                line-height: .88rem;
                position: absolute;
                text-align: center;
                background-color: #f5f5f5;
                
            }
            .home_shop_head_left{
                left: 0;
                border-radius: .3rem 0 .17rem 0;
            }
            .home_shop_head_right{
                right: 0;
                border-radius: 0 .3rem 0 .17rem;
            }
            .router-link-active{
                top: -.26rem;
                background: #fff;
                color: #000;
                font-weight: bolder;
            }
        }
    }
}
</style>
