'use strict'
const Service = require('egg').Service;
const mybatisMapper = require('mybatis-mapper');
mybatisMapper.createMapper(['app/mybatis_sql_map/index.xml']);
class indexService extends Service{
  async getIndex(){
    const {
      ctx
  } = this;
    const indexQuery = mybatisMapper.getStatement('index', 'getIndex');
    const res = await this.app.mysql.query(indexQuery);
    return res
  }
} 
module.exports = indexService;