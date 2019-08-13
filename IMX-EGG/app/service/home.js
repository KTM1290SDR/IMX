'use strict'
const Service = require('egg').Service;
const mybatisMapper = require('mybatis-mapper');
mybatisMapper.createMapper(['app/mybatis_sql_map/home.xml']);
class homeService extends Service{
  // async getIndex(){
  //   const {
  //     ctx
  // } = this;
  //   const indexQuery = mybatisMapper.getStatement('index', 'getIndex');
  //   const res = await this.app.mysql.query(indexQuery);
  //   return res
  // }
  async findUesr(parmas){
    const findSOL = mybatisMapper.getStatement('home', 'findUesr',parmas);
    const IMXnumber = await this.app.mysql.query(findSOL);
    let hasUesr=false;
    if(IMXnumber.length>0){
      hasUesr=true
      return {hasUesr,IMXnumber:IMXnumber[0].IMXnumber}
    }else{
      return {hasUesr}
    }
   
  }
} 
module.exports = homeService;