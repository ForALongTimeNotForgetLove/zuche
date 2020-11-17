<template>
  <div id="register">
    <div class="register_head">
      <img src="./image/返回.png" alt="" @click="ret"/>
      注册
    </div>
    <div class="register_login">
      <div class="register_id">
        <span>手机号</span>
        <input type="text" :placeholder="text" v-model="id"/>
      </div>
      <div class="register_code">
        <span>验证码</span>
        <div>
          <input type="text" placeholder="请输入验证码" v-model="code"/>
          <button>获取验证码</button>
        </div>
      </div>
      <div class="register_pass">
        <span>请输入新密码</span>
        <input :type="password" :placeholder="pass" v-model="passwords"/>
        <img src="./image/查看.png" alt="" @click="cha"/>
      </div>
      <div class="register_ready register_pass">
        <span>再次输入密码</span>
        <input :type="passwordrep" :placeholder="passold" v-model="passwordss"/>
        <img src="./image/查看.png" alt="" @click="chakan"/>
        
      </div>
      <div style="color:red">{{test}}</div>
    </div>
    <button @click="submit" class="submit">提交</button>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      id: "",
      passwords: "",
      passwordss:'',
      code:'',
      password: "password",
      passwordrep: "password",
      istr: true,
      isfalse:true,
      text: "请输入手机号",
      pass: "请输入新密码",
      passold:'再次输入新密码',
      test:''
    };
  },
  methods: {
    ret() {
      this.$router.push("/");
    },
    cha() {
      this.istr = !this.istr;
      if (this.istr) {
        this.password = "password";
      } else {
        this.password = "text";
      }
    },
    chakan(){
        this.isfalse = !this.isfalse;
        if (this.isfalse) {
        this.passwordrep = "password";
      } else {
        this.passwordrep = "text";
      }
    },
    submit(){
      console.log('12')
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
        }else if(this.passwords != this.passwordss){
            this.test = '两次密码不同，请从新输入'
        }else{
          this.passwords = '';
            this.pass='请输入正确的密码';
            return;
        }
    }
  },
  components: {},
};
</script>

<style scoped lang="less">
#register {
  padding: 0 0.25rem;
  position: relative;
  .register_head {
    margin-top: 0.67rem;
    text-align: center;
    font-size: 0.36rem;
    font-weight: bolder;
    position: relative;
    margin-bottom: 0.58rem;
    img {
      position: absolute;
      left: 0;
      width: 0.22rem;
      bottom: 0;
    }
  }
  .register_login {
    font-size: 0.28rem;
    margin-bottom: 1.29rem;
    div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.29rem;
      span {
        font-weight: bolder;
      }
      input {
        padding: 0 0.19rem;
        width: 4.98rem;
        height: 0.7rem;
        border: 1px solid #e4e4e4;
        box-sizing: border-box;
        border-radius: 0.03rem;
      }
    }
    .register_id {
      margin-bottom: 0.28rem;
    }
    .register_code {
      div {
        width: 4.98rem;
        margin: 0;
        input {
          width: 2.48rem;
        }
        button {
          width: 2rem;
          height: 0.68rem;
        }
      }
    }
    .register_pass {
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
  }
  .submit {
    font-size: 0.36rem;
    font-weight: bolder;
    background-color: #f2f2f2;
    color: #999999;
    width: 5rem;
    height: 1rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
