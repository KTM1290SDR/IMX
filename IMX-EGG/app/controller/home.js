'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  // async index() {
  //   const {
  //     ctx
  //   } = this;
  //   const Index = await ctx.service.index.getIndex();
  //   ctx.body = {
  //     code: "12346",
  //     data: Index
  //   }
  // };
  async findUesr() {
    const {
      ctx
    } = this;
    const parmas = ctx.request.body;
    const findRes = await ctx.service.home.findUesr(parmas);
    ctx.body = {
      code: "200",
      data: findRes
    }
  }
}

module.exports = HomeController;