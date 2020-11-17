<template>
  <div id="inland">
    <ul>
      <li class="inland_one">
        <div>
          <p>取还车城市</p>
          <div class="inland_div">
            郑州 <img src="./image/箭头下.png" alt="" />
          </div>
        </div>
        <div>
          <p>取还车地点</p>
          <div class="inland_al inland_div">
            阿里木坚果世家 <img src="./image/箭头下.png" alt="" />
          </div>
        </div>
        <div class="inland_one_div">
          <p>异地还车</p>
          <div class="inland_div">
            <van-switch v-model="checked" size=".3rem" />
          </div>
        </div>
      </li>
      <li class="inland_two">
        <p><span>今天</span><span>周一</span></p>
        <div>
            <span>11月20日 19:30</span>
            <img src="./image/指向.png" alt="">
            <span>11月23日 19:30</span>
        </div>
      </li>
      <li class="inland_three">
        <van-checkbox v-model="checkeds" icon-size=".26rem">送车上门</van-checkbox>
      </li>
    </ul>
    <button class="inland_btn">我要租车</button>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      checked: false,
      checkeds: false,
      
    };
  },
  methods: {},
  components: {},
};
</script>

<style scoped lang="less">
#inland {
  ul {
    padding: 0 0.56rem 0 0.5rem;
    box-sizing: border-box;
    li {
      padding: 0.2rem 0 0.2rem 0.24rem;
      border-bottom: 1px solid #eeeeee;
      box-sizing: border-box;
    }
    .inland_one {
      display: flex;
      justify-content: space-between;
      div {
        p {
          color: #999999;
          font-size: 0.24rem;
        }
        div {
          
          font-size: 0.42rem;
          font-weight: bolder;
          display: flex;
          align-items: center;
          img {
            width: 0.17rem;
            height: 0.1rem;
            margin-left: 0.2rem;
          }
        }
        .inland_al {
          font-size: 0.3rem;
        }
      }
      .inland_one_div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
      }
      .inland_div{
          height: 0.4rem;
          margin-top: 0.26rem;
      }
    }
    .inland_two{
        p{
            width: 100%;
            font-size: .24rem;
            display: flex;
            justify-content: space-between;
            font-weight: bolder;
            margin-bottom: .17rem;
        }
        div{
            font-size: .34rem;
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: space-between;
            img{
                display: inline-block;
                width: .49rem;
            }
        }
    }
    .inland_three{
        font-size: .24rem;
        color: #999999;
    }
  }
  .inland_btn{
      font-size: .36rem;
      color: #fff;
      font-weight: bold;
      background: #0d8ffb;
      width: 5.8rem;
      height: .92rem;
      border-radius: .12rem;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
  }
}
</style>
