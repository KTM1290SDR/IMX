'use strict';

const Controller = require('egg').Controller;

class visitingCardController extends Controller {
  async getVisCardInfo() {
    const {
      ctx
    } = this;
    const parmas = ctx.request.body;
    const VisCardRes = await ctx.service.visitingCard.getVisCardInfo(parmas);
    ctx.body = {
      code: "200",
      VisCardRes
    }
  };
  async getFriendGroup(){
    const {
      ctx
    } = this;
    const parmas = ctx.query;
    const friendGroupList = await ctx.service.visitingCard.getFriendGroup(parmas);
    ctx.body = {
      code: "200",
      friendGroupList
    }
  }
}

module.exports = visitingCardController;