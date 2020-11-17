<template>
  <div id="head">
    <img src="./../views//login/image/返回.png" alt="" class="img_left" @click="btn"/>
    <span>{{title}}</span>
  </div>
</template>

<script>
export default {
  props: {
      title: String
  },
  data() {
    return {
      
    };
  },
  methods: {
    btn(){
      this.$router.go(-1);
    }
  },
  components: {},
};
</script>

<style scoped lang="less">
#head{
    position: fixed;
    top: .4rem;
    height: .88rem;
    width: 100%;
    line-height: .88rem;
    font-size: .36rem;
    text-align: center;
    padding: 0 .24rem;
    font-weight: bolder;
    .img_left{
        width: .18rem;
        position: absolute;
        left: .24rem;
        top: 50%;
        transform: translateY(-50%);
    }
}
</style>
