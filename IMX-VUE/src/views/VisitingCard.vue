<template>
  <div class="VisitingCard">
    <mu-appbar style="width: 100%;" color="teal">
      <mu-button icon slot="left" @click="()=>this.$router.back(-1)">
        <i class="iconfont iconhaoyou"></i>
      </mu-button>
      <div class="nav-top">
        <span v-if="VisitingCardTpye===0">我的资料</span>
        <span v-else>个人资料</span>
      </div>
      <mu-button icon slot="right">
        <i class="iconfont iconhaoyou"></i>
      </mu-button>
    </mu-appbar>
    <div class="appbar-placeholder"></div>
    <div class="main">
      <div class="img-top">
        <img src="@/assets/img/timg (1).jpg" alt />
        <div class="basics-info">
          <div class="avatar">
            <mu-avatar size="80">
              <img src="@/assets/img/toux.jpg" />
            </mu-avatar>
          </div>
          <div>
            <div class="nick-name">KTM1290SDR</div>
            <div>
              <span>IMX:1669194402</span>
            </div>
            <div>
              <span>男</span>
              &nbsp;
              <span>天蝎座</span>
            </div>
          </div>
        </div>
      </div>
      <div class="main-info-placeholder"></div>
       <div class="main-info">
          <mu-list>
            <mu-list-item button :ripple="false">
              <mu-list-item-action>
                <i class="iconfont iconhaoyou"></i>
              </mu-list-item-action>
              <mu-list-item-title>KTM1290SDR</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button :ripple="false">
              <mu-list-item-action>
                <i class="iconfont iconhaoyou"></i>
              </mu-list-item-action>
              <mu-list-item-title>好好的学习，好好的和她在一起好好的学习，好好的和她在一起</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button :ripple="false">
              <mu-list-item-action>
                <i class="iconfont iconhaoyou"></i>
              </mu-list-item-action>
              <mu-list-item-title>1997-11-15</mu-list-item-title>
            </mu-list-item>
          </mu-list>
        </div>
    </div>
    <div class="card-btm-placeholder"></div>
    <div class="card-btm">
      <mu-button round color="success" v-if="VisitingCardTpye===2">加好友</mu-button>
      <mu-button round color="success" v-else-if="VisitingCardTpye===0">编辑资料</mu-button>
      <mu-button round color="success" v-else-if="VisitingCardTpye===1">发消息</mu-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "VisitingCard",
  data() {
    return {
      VisitingCardTpye: 0
    };
  }
};
</script>
<style lang="less" scoped>
.VisitingCard {
  position: relative;
  height: 100%;
  .main-info-placeholder{
      height: 40px;
  }
  .main-info{
      i{
          font-size: 25px;
      }
  }
  .mu-appbar {
    position: fixed;
    top: 0;
    left: 0;
  }
  .appbar-placeholder {
    height: 55px;
  }
  .main {
    height: calc(100% - 115px);
  }
  .basics-info {
    transform: translateY(50%);
    bottom: 0;
    left: 0;
    display: flex;
    position: absolute;
    .avatar {
      width: 85px;
      height: 85px;
      border-radius: 50%;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 20px;
    }
    .nick-name {
      height: 50%;
      color: #fff;
      font-size: 25px;
      text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    }
    span {
      font-size: 12px;
    }
  }
  .img-top {
    height: 25%;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .nav-top {
    display: flex;
    justify-content: center;
    font-size: 16px;
  }
  .mu-elevation-4 {
    box-shadow: none;
  }
  .card-btm-placeholder {
    height: 60px;
  }
  .card-btm {
    position: fixed;
    z-index: 10;
    left: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #19e846;
    .mu-button {
      flex: 1;
      margin: 10px;
    }
  }
}
</style>
