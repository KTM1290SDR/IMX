/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
// const {mysql} =require('./mysql');
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1564794944370_2831';
  // config.mysql=mysql;

  // add your middleware config here
  config.middleware = [];
  config.mysql = {
    client: {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: '123456',
      database:'imx'
    },
    app: true,
    agent: false,
  };
  exports.io = {
    init: { }, // passed to engine.io
    namespace: {
      '/': {
        connectionMiddleware: ['auth'],
        packetMiddleware: ['filter'],
      },
      
      '/example': {
        connectionMiddleware: [],
        packetMiddleware: [],
      },
    },
  };
  config.middleware = [ 'jwt' ]

config.jwt = {
    enable: true,
    ignore: [ ], // 哪些请求不需要认证
}
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  
// add your config here
config.middleware = [];
config.security = {
  csrf: {
    enable: false,
    ignoreJSON: true
  },
  domainWhiteList: ['http://localhost:8080']
};
config.cors = {
  origin:'*',
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
};

  return {
    ...config,
    ...userConfig,
  };
};



