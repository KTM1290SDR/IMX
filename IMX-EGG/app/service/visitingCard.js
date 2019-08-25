'use strict'
const Service = require('egg').Service;
const mybatisMapper = require('mybatis-mapper');
mybatisMapper.createMapper(['app/mybatis_sql_map/visitingCard.xml']);
class visitingCardService extends Service {
    //获取资料卡信息
    async getVisCardInfo(parmas) {
        const isFriendSOL = mybatisMapper.getStatement('visitingCard', 'isFriend', parmas);
        const isFriend = await this.app.mysql.query(isFriendSOL);
        const getVisCardInfoSOL = mybatisMapper.getStatement('visitingCard', 'getVisCardInfo', parmas);
        const visCardInfo = await this.app.mysql.query(getVisCardInfoSOL);
        const getVisFriCardInfoSOL = mybatisMapper.getStatement('visitingCard', 'getVisFriCardInfo', parmas);
        const VisFriCardInfo = await this.app.mysql.query(getVisFriCardInfoSOL);
        let VisitingCardTpye;
        if (isFriend.length > 0) {
            VisitingCardTpye = 1
            return {
                visCardInfo: VisFriCardInfo[0],
                VisitingCardTpye
            }
        } else {
            VisitingCardTpye = 2
            return {
                visCardInfo: visCardInfo[0],
                VisitingCardTpye
            }
        }
    };
    //获取好友分组列表
    async getFriendGroup(parmas) {
        const getFriendGroupSOL = mybatisMapper.getStatement('visitingCard', 'getFriendGroup', parmas);
        const friendGroupList = await this.app.mysql.query(getFriendGroupSOL);
        return friendGroupList
    }
}
module.exports = visitingCardService;