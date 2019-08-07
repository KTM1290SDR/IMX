'use strict'
const Service = require('egg').Service;
const mybatisMapper = require('mybatis-mapper');
mybatisMapper.createMapper(['app/mybatis_sql_map/login.xml']);
class loginService extends Service {
  async Login(parmas) {
    let loginSign = 0; //0:未验证,1:账号不存在,2:密码错误,3:验证成功。
    const isHasUserSQL = mybatisMapper.getStatement('login', 'isHasUser', parmas);
    const isPswCorrectSQL = mybatisMapper.getStatement('login', 'isPswCorrect', parmas);
    const isHasUser = await this.app.mysql.query(isHasUserSQL);
    if (isHasUser.length == 0) {
      loginSign = 1;
      return loginSign
    } else {
      const isPswCorrect = await this.app.mysql.query(isPswCorrectSQL);
      if (isPswCorrect.length == 0) {
        loginSign = 2;
        return loginSign
      } else {
        loginSign = 3;
        return {loginSign,userInfo:isPswCorrect[0]}
      }
    }
    
  }
  async register(parmas) {

    const register = mybatisMapper.getStatement('login', 'register', parmas);
    const res = await this.app.mysql.query(register);
    const getUserId = mybatisMapper.getStatement('login', 'getUserId');
    const useId = await this.app.mysql.query(getUserId);
    return useId[0]
  }
}
module.exports = loginService;