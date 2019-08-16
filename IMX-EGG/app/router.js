'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  // ajax
  // router.get('/', controller.home.index);
  router.post('/login', controller.login.login);
  router.post('/register', controller.login.register);
  router.post('/findUesr', controller.home.findUesr);
  router.post('/getVisCardInfo', controller.visitingCard.getVisCardInfo);
  // socket
  app.io.of('/').route('chat', app.io.controllers.chat);
};



