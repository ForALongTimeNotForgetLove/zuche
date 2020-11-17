<template>
  <div id="personal">
    <div class="personal_left">
      <div class="personal_left_head">
        <div class="personal_left_head_left" @click="btn">
          <div>
            <img src="./../men/image/头像.png" alt="" />
          </div>
          <div>
            <p>李先生</p>
            <p>15015452**25</p>
          </div>
        </div>
        <van-icon name="arrow" size=".36rem" color="#fff" />
      </div>
      <div class="personal_left_body">
        <ul>
            <li @click="manoy">
              <img src="./image/钱包.png" alt="">
              我的钱包
            </li>
            <li>
              <img src="./image/订单.png" alt="">
              我的订单
            </li>
            <li>
              <img src="./image/用户反馈.png" alt="">
              用户反馈
            </li>
            <li>
              <img src="./image/帮助中心.png" alt="">
              帮助中心
            </li>
            <li @click="set">
              <img src="./image/设置.png" alt="" >
              设置
            </li>
            <li>
              <img src="./image/钱包.png" alt="">
              版本检测
            </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  methods: {
    manoy(){

    },
    btn(){
      this.$router.push('/personal')
    },
    set(){
      this.$router.push('/set')
    }
  },
  components: {},
};
</script>

<style scoped lang="less">
#personal {
  width: 100%;
  height: 100%;
  background: rgba(148, 148, 150, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  .personal_left {
    width: 5rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    .personal_left_head {
      width: 100%;
      padding: 1.28rem 0.29rem 0 0.24rem;
      box-sizing: border-box;
      border-radius: 0 0.44rem 0 0;
      background: #4391ff;
      height: 3.06rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .personal_left_head_left {
        display: flex;
        align-items: center;
        div {
          margin-right: 0.29rem;
          img {
            width: 1.29rem;
          }
          p {
            font-size: 0.32rem;
            color: #fff;
          }
          p:nth-child(2) {
            font-size: 0.24rem;
            margin-top: 0.29rem;
          }
        }
      }
    }
    .personal_left_body {
      background: #fff;
      height: 100%;
      flex: 1;
      padding-top: .52rem;
      ul{
          li{
              border-bottom: 1px solid #eeeeee;
              height: 1rem;
              display: flex;
              align-items: center;
              padding-left: .24rem;
              font-size: .28rem;
              font-weight: bold;
              img{
                width: .45rem;
                margin-right: .31rem;
              }
          }
      }
    }
  }
}
</style>
