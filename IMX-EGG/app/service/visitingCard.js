'use strict'
const Service = require('egg').Service;
const mybatisMapper = require('mybatis-mapper');
mybatisMapper.createMapper(['app/mybatis_sql_map/visitingCard.xml']);
class visitingCardService extends Service {
    async getVisCardInfo(parmas) {
        const isFriendSOL = mybatisMapper.getStatement('visitingCard', 'isFriend', parmas);
        const isFriend = await this.app.mysql.query(isFriendSOL);
        const getVisCardInfoSOL = mybatisMapper.getStatement('visitingCard', 'getVisCardInfo', parmas);
        const visCardInfo = await this.app.mysql.query(getVisCardInfoSOL);
        let VisitingCardTpye;
        isFriend.length > 0?VisitingCardTpye = 1:VisitingCardTpye = 2
        return {
            visCardInfo:visCardInfo[0],
            VisitingCardTpye
        }
    }
}
module.exports = visitingCardService;