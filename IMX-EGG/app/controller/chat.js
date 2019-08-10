'use strict';

const Controller = require('egg').Controller;
class chatController extends Controller {
    async send() {
        const { ctx, app } = this;
        const nsp = app.io.of('/');
  
        let msg = '{"id":2, "message":666}'
  
        let data = await JSON.parse(msg)
  
        // app.io.controllers.chat(msg)
        nsp.emit('chat', data);
        return ctx.body = 'hi, egg';
      }
  }
  module.exports = chatController;