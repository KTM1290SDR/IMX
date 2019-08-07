<template>
  <div class="Register">
    <div class="main">
      <router-link to="/Login" class="nav">
        <i>/</i>
        <span>返回</span>
      </router-link>
      <div class="welcome">Welcome to IMX</div>
      <div class="register-form">
        <mu-form ref="form" :model="registerForm" label-position="right" label-width="80">
          <mu-form-item label="昵称" prop="username" :rules="usernameRules" help-text="请输入昵称">
            <mu-text-field v-model="registerForm.username" prop="username"></mu-text-field>
          </mu-form-item>
          <mu-form-item label="性别" prop="gender" help-text="请选择性别">
            <mu-radio value="男" v-model="registerForm.gender" label="男"></mu-radio>
            <mu-radio value="女" v-model="registerForm.gender" label="女"></mu-radio>
          </mu-form-item>
          <mu-form-item label="生日" prop="birthday" help-text="请选择日期">
            <mu-date-input
              value-format="YYYY-MM-DD"
              container="dialog"
              v-model="registerForm.birthday"
              prop="birthday"
              :min-date="minBirthday"
              :max-date="maxBirthday"
            ></mu-date-input>
          </mu-form-item>
          <mu-form-item label="密码" prop="password" :rules="passwordRules" help-text="请输入包含字母数字的密码">
            <mu-text-field type="password" v-model="registerForm.password" prop="password"></mu-text-field>
          </mu-form-item>
          <mu-form-item
            label="确认密码"
            prop="confirmPassword"
            :rules="confirmPassword"
            help-text="请再次输入密码"
          >
            <mu-text-field
              type="password"
              v-model="registerForm.confirmPassword"
              prop="confirmPassword"
            ></mu-text-field>
          </mu-form-item>
          <mu-form-item prop="isAgree" :rules="argeeRules" help-text="请确保阅读用户协议" label-width="50">
            <mu-checkbox v-model="registerForm.isAgree"></mu-checkbox>
            <span>
              <span>同意</span>
              <span class="userAgree" @click="()=>this.openUserAgree=true">用户协议</span>
            </span>
          </mu-form-item>
          <mu-form-item class="group-btn" label-width="20">
            <mu-button color="primary" @click="submit">提交</mu-button>
            <mu-button color="primary" @click="clear">重置</mu-button>
          </mu-form-item>
        </mu-form>
      </div>
    </div>
    <mu-dialog
      title="请仔细阅读以下协议"
      width="600"
      max-width="80%"
      :esc-press-close="false"
      :overlay-close="false"
      :open.sync="openUserAgree"
    >
      <div>
        <p>1.好好学习Vue</p>
        <p>2.使用好egg</p>
        <p>3.听爸爸妈妈的话</p>
        <p>4.玩英雄联盟时别坑队友</p>
        <p>5.努力找到工作</p>
        <p>6.找个女朋友</p>
        <p>7.毕业一年之内买本田思域</p>
      </div>
      <mu-button slot="actions" flat color="primary" @click="()=>this.openUserAgree=false">关闭</mu-button>
      <mu-button
        slot="actions"
        flat
        color="primary"
        @click="()=>{this.openUserAgree=false;this.registerForm.isAgree=true}"
      >同意</mu-button>
    </mu-dialog>
    <mu-dialog
      title="注册成功"
      width="600"
      max-width="80%"
      :esc-press-close="false"
      :overlay-close="false"
      :open.sync="registerSucc"
    >
      你的账号：{{this.newAccount}}
      <mu-button slot="actions" flat color="primary" to="/Login">确定</mu-button>
    </mu-dialog>
  </div>
</template>
<script>
import encrypt from "@/crypto.js";
export default {
  name: "Register",
  data() {
    const minBirthday = new Date("1920");
    const maxBirthday = new Date(this.moment().format());
    return {
      openUserAgree: false,
      registerSucc:false,
      newAccount:null,
      minBirthday,
      maxBirthday,
      usernameRules: [
        { validate: val => !!val, message: "必须填写昵称" },
        { validate: val => val.length <= 10, message: "昵称小于10个字符" }
      ],
      passwordRules: [
        { validate: val => !!val, message: "必须填写密码" },
        {
          validate: val => val.length >= 6 && val.length <= 10,
          message: "密码长度大于6小于10"
        }
      ],
      confirmPassword: [
        {
          validate: val => val === this.registerForm.password,
          message: "两次密码输入不一致"
        }
      ],
      argeeRules: [{ validate: val => !!val, message: "必须同意用户协议" }],
      registerForm: {
        username: "",
        gender: "男",
        birthday: "",
        password: "",
        confirmPassword: "",
        isAgree: false
      }
    };
  },
  methods: {
    submit() {
      this.$refs.form.validate().then(result => {
        if (result) {
          let psdEncrypt = encrypt.Encrypt(this.registerForm.password); //用户密码加密加密
          let constellation = this.getAstro(
            this.moment(this.registerForm.birthday).format("M"),
            this.moment(this.registerForm.birthday).format("D")
          ); //星座计算
          let registerFormNEW = {
            username: this.registerForm.username,
            gender: this.registerForm.gender,
            birthday: this.registerForm.birthday,
            password: psdEncrypt,
            constellation: constellation
          };
          console.log(registerFormNEW);
          this.axios.post("/api/register", registerFormNEW).then(res => {
            // console.log(res.data);
            this.newAccount=res.data.registerMsg.useId;
            this.registerSucc=true;
          });
        }
      });
    },
    getAstro(month, day) {
      var s = "魔羯水瓶双鱼牡羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯";
      var arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
      return s.substr(month * 2 - (day < arr[month - 1] ? 2 : 0), 2);
    },
    clear() {
      this.$refs.form.clear();
      this.registerForm = {
        username: "",
        gender: "男",
        birthday: "",
        password: "",
        confirmPassword: "",
        isAgree: false
      };
    }
  }
};
</script>
<style lang="less" scoped>
.Register {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .main {
    .nav {
      i {
        padding-right: 10px;
      }
      position: fixed;
      left: 0;
      top: 0;
      color: #2196f3;
      padding: 15px;
    }
    .welcome {
      padding-bottom: 30px;
      font-size: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .mu-raised-button {
      box-shadow: none;
    }
    .group-btn {
      margin-top: 40px;
    }
    .userAgree {
      color: #2196f3;
    }
  }
}
</style>
