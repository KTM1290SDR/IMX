'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async login() {
    const {
      ctx
    } = this;
    const parmas = ctx.request.body;
    console.log(parmas)
    const loginInfo =await ctx.service.login.Login(parmas);
    const loginToken = ctx.helper.loginToken(loginInfo.userInfo, 7200) // token生成
    if (loginInfo==0||loginInfo==1||loginInfo==2) {
      ctx.body = {
        code: "404",
        loginSign: loginInfo,
        msg:"登录失败"
      }
    }else {
      ctx.body = {
        code: "200",
        loginInfo: loginInfo,
        loginToken:loginToken,
        msg:"登录成功"
      }
    }
    
  };
  async register() {
    const {
      ctx
    } = this;
    const parmas = ctx.request.body;
    const registerMsg = await ctx.service.login.register(parmas);
    ctx.body = {
      code: "50000",
      registerMsg:registerMsg,
      msg:"注册成功"
    }
  }
}

module.exports = LoginController;