'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const {
      ctx
    } = this;
    const Index = await ctx.service.index.getIndex();
    ctx.body = {
      code: "12346",
      data: Index
    }
  }
}

module.exports = HomeController;