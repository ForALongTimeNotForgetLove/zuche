<template>
  <div id="login">
    <img src="./image/AtPar.png" alt="" class="login_img" />
    <div class="login_log">
      <div class="login_id">
        <span>账号</span>
        <input type="text" :placeholder="text" v-model="id" />
      </div>
      <div class="login_pass">
        <span>密码</span>
        <input :type="password" :placeholder="pass" v-model="passwords" />
        <img src="./image/查看.png" alt="" @click="cha" />
      </div>
      <div class="button">
        <button @click="btn">登录</button>
        <p>
            <router-link to="/register" tag="span">注册</router-link>
            <router-view></router-view>
            <span>忘记密码</span>
        </p>
      </div>
    </div>
    <div class="login_bottom">
        <img src="./image/car.png" alt="">
        <p>登录即表示您同意<span>《平价租车用户隐私协议》</span></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      id: "",
      passwords: "",
      password: "password",
      istr: true,
      text:'请输入账号',
      pass:'请输入密码'
    };
  },
  methods: {
    cha() {
      this.istr = !this.istr;
      if (this.istr) {
        this.password = "password";
      } else {
        this.password = "text";
      }
    },
    btn(){
        let id = /^[1][3,4,5,7,8][0-9]{9}$/;
        let pass = /^[a-zA-Z]\w{5,17}$/;
        if(id.test(this.id)){
            console.log(this.id);
        }else{
            this.id='';
            this.text = '请输入正确的账号';
            this.iscolor = true;
        };
        if(pass.test(this.passwords)){
            console.log(this.passwords);
        }else{
            this.passwords = '';
            this.pass='请输入正确的密码';
            return;
        }
        this.$router.push('/home')
    }
  },
  components: {},
};
</script>

<style scoped lang="less">
#login {
  .login_img {
    width: 0.92rem;
    margin: 0 auto;
    margin-top: 1.28rem;
  }
  .login_log {
    font-size: 0.28rem;
    padding: 0 0.33rem 0 0.24rem;
    margin-top: 1.58rem;
    div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        font-weight: bolder;
      }
      input {
        padding: 0 0.19rem;
        width: 5.52rem;
        height: 0.9rem;
        border: 2px solid #e4e4e4;
        box-sizing: border-box;
      }
    }
    .login_id {
      margin-bottom: 0.28rem;
    }
    .login_pass {
      position: relative;
      input {
        padding-right: 0.8rem;
      }
      img {
        width: 0.36rem;
        position: absolute;
        right: 0.19rem;
        z-index: 10;
      }
    }
    .button {
      margin-top: 1.42rem;
      flex-direction: column;
      align-items: inherit;
      button {
        width: 100%;
        height: 1rem;
        background-color: #43a5ff;
        font-size: 0.33rem;
        color: #fff;
        border-radius: 0.08rem;
      }
      p{
          display: flex;
          justify-content: space-between;
          color: #3d88f7;
          font-size: .26rem;
          font-weight: bold;
          margin-top: .19rem;
      }
    }
  }
  .login_bottom{
      width: 100%;
      height: 1.95rem;
      background: #e9f1ff;
      position: fixed;
      bottom: 0;
      img{
          width: 3.84rem;
          position: absolute;
          right: 0;
          top: -50%;
      }
      p{   
          width: 100%;
          position: absolute;
          bottom: .5rem;
          font-size: .2rem;
          text-align: center;
          span{
              color: #0c67f9;
          }
      }
  }
}
</style>
