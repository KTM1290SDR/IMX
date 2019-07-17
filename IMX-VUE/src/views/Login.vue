<template>
  <div class="Login">
    <div class="input-group">
      <div class="logo">IMX</div>
      <div class="avatar-img">
        <mu-avatar size="60">
          <img
            src="@/assets/img/toux.jpg"
            alt
          />
        </mu-avatar>
      </div>
      <mu-form
        ref="form"
        label-width="50"
        :model="loginForm"
        class="loginForm"
        label-position="right"
      >
        <mu-form-item label="IMX:" prop="account" :rules="accountRules">
          <mu-auto-complete :data="fruits" v-model="loginForm.account" avatar >
            <template slot-scope="scope">
              <mu-list-item-action>
                <mu-avatar>
                  <img
                    src="@/assets/img/toux.jpg"
                    alt
                  />
                </mu-avatar>
              </mu-list-item-action>
              <mu-list-item-content v-html="scope.highlight"></mu-list-item-content>
            </template>
          </mu-auto-complete>
        </mu-form-item>
        <mu-form-item label="密码:" prop="password" :rules="passwordRules">
          <mu-text-field type="password" v-model="loginForm.password" prop="password"></mu-text-field>
        </mu-form-item>
        <mu-form-item label-width="30" class="loginBtn">
          <mu-button color="primary" @click="loginSubmit">登录</mu-button>
          <mu-button color="info" to="/Register">注册</mu-button>
        </mu-form-item>
      </mu-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      fruits: ["1669194402", "1775922567"],
      accountRules: [{ validate: val => !!val, message: "必须填写用户名" }],
      passwordRules: [
        { validate: val => !!val, message: "必须填写密码" },
        {
          validate: val => val.length >= 3 && val.length <= 10,
          message: "密码长度大于3小于10"
        }
      ],
      loginForm: {
        account: "",
        password: ""
      }
    };
  },
  methods: {
    loginSubmit(){
       this.$refs.form.validate().then((result) => {
        console.log('验证是否通过: ', result)
      });
    }
  }
};
</script>
<style lang="less" scoped>
html,
body {
  width: 100%;
  height: 100%;
}
.Login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  .input-group {
    transform: translateY(-20%);
    .mu-raised-button {
      box-shadow: none;
    }
    .loginBtn {
      padding-top: 30px;
    }
  }
  .avatar-img,
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
  }
  .logo {
    font-size: 40px;
  }
}
</style>
