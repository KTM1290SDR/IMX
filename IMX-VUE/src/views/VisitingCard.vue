<template>
  <div class="VisitingCard">
    <mu-appbar style="width: 100%;" color="teal">
      <mu-button icon slot="left" replace @click="()=>this.$router.back(-1)">
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
        <img v-if="userInfo.userDataImg" :src="userInfo.userDataImg" alt />
        <img v-else src="@/assets/img/timg (1).jpg" alt />
        <div class="basics-info">
          <div class="avatar">
            <mu-avatar size="80">
              <img v-if="userInfo.userAvatar" :src="userInfo.userAvatar" alt />
              <img v-else src="@/assets/img/toux.jpg" />
            </mu-avatar>
          </div>
          <div>
            <div class="nick-name">{{userInfo.userName}}</div>
            <div>
              <span>IMX:{{userInfo.userId}}</span>
            </div>
            <div>
              <span>{{userInfo.userGender}}</span>
              &nbsp;
              <span>{{userInfo.userConstellation}}座</span>
            </div>
          </div>
        </div>
      </div>
      <div class="main-info-placeholder"></div>
      <div class="main-info">
        <mu-list>
          <mu-list-item button :ripple="false" v-if="VisitingCardTpye==1">
            <mu-list-item-action>
              <i class="iconfont iconhaoyou"></i>
            </mu-list-item-action>
            <mu-list-item-title>
              <span>备注：</span>
              <span v-if="userInfo.userRemarks">{{userInfo.userRemarks}}</span>
              <span v-else>{{userInfo.userName}}</span>
            </mu-list-item-title>
          </mu-list-item>
          <mu-list-item button :ripple="false">
            <mu-list-item-action>
              <i class="iconfont iconhaoyou"></i>
            </mu-list-item-action>
            <mu-list-item-title>
              <span>签名：</span>
              <span v-if="userInfo.userSignature">{{userInfo.userSignature}}</span>
              <span v-else>请编辑个性签名</span>
            </mu-list-item-title>
          </mu-list-item>
          <mu-list-item button :ripple="false">
            <mu-list-item-action>
              <i class="iconfont iconhaoyou"></i>
            </mu-list-item-action>
            <mu-list-item-title>生日：{{userInfo.userBirthday}}</mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </div>
    </div>
    <div class="card-btm-placeholder"></div>
    <div class="card-btm">
      <mu-button round color="success" v-if="VisitingCardTpye===2" @click="openVerify()">加好友</mu-button>
      <mu-button round color="success" v-else-if="VisitingCardTpye===0">编辑资料</mu-button>
    </div>
    <div class="card-btm" v-if="VisitingCardTpye===1">
      <mu-button to="/Chat" round color="success">发消息</mu-button>
      <mu-button round color="red">刪除好友</mu-button>
    </div>
    <mu-dialog
      title="填写验证信息"
      width="600"
      max-width="80%"
      :esc-press-close="false"
      :overlay-close="false"
      :open.sync="openVerifyAlert"
    >
      <mu-form :model="verifyForm" class="mu-demo-form" label-position="left" label-width="100">
        <mu-form-item prop="remark" label="备注">
          <mu-text-field v-model="verifyForm.remark" :max-length="10"></mu-text-field>
        </mu-form-item>
        <mu-form-item prop="message" label="验证消息">
          <mu-text-field v-model="verifyForm.message" :max-length="10"></mu-text-field>
        </mu-form-item>
        <mu-form-item prop="grouping" label="选择分组">
          <mu-select v-model="verifyForm.grouping" full-width>
            <mu-option
              v-for="(item,index) in group"
              :key="index"
              :label="item.groupName"
              :value="item.groupId"
            ></mu-option>
          </mu-select>
        </mu-form-item>
      </mu-form>
      <mu-button slot="actions" flat color="primary" @click="submitVerify()">发送</mu-button>
      <mu-button slot="actions" flat color="primary" @click="openVerifyAlert=false">取消</mu-button>
    </mu-dialog>
  </div>
</template>
<script>
export default {
  name: "VisitingCard",
  data() {
    return {
      group: [{ groupId: "0", groupName: "我的好友" }],
      userInfo: {
        userId: "1669194402",
        userName: "KTM1290SDR",
        userGender: "男",
        userBirthday: "1997-11-15",
        userAvatar: "",
        userSignature: "好好的学习，好好的工作",
        userConstellation: "天蝎",
        userDataImg: "",
        userCircleImg: ""
      },
      verifyForm: {
        remark: "",
        message: "",
        grouping: "0"
      },
      openVerifyAlert: false,
      VisitingCardTpye: 2 //0:自己,1:已经添加,2:没有添加
    };
  },
  mounted() {
    this.getUserInfo();
  },
  methods: {
    //获取用户信息
    getUserInfo() {
      const activeUser = this.$store.getters.getUserInfo.data.userId;
      const findUser = this.$route.query.userId;
      if (activeUser === findUser) {
        this.VisitingCardTpye = 0;
      } else {
        this.axios
          .post("/api/getVisCardInfo", { findUser, activeUser })
          .then(res => {
            console.log(res.data);
            this.VisitingCardTpye = res.data.VisCardRes.VisitingCardTpye;
            this.userInfo = res.data.VisCardRes.visCardInfo;
            this.userInfo.userBirthday = this.moment(
              res.data.VisCardRes.visCardInfo.userBirthday
            ).format("YYYY-MM-DD");
          });
      }
    },
    //打开验证弹出并获取用户分组
    openVerify() {
      const userId = this.$store.getters.getUserInfo.data.userId;
      this.axios.get(`/api/getFriendGroup?userId=${userId}`).then(res => {
        console.log(res.data.friendGroupList);
        if (res.data.friendGroupList.length > 0 && this.group.length<=1) {
          this.group.push(...res.data.friendGroupList);
        }
      });
      this.openVerifyAlert = true;
    },
    //提交验证信息
    submitVerify() {
      console.log(this.verifyForm);
    }
  }
};
</script>
<style lang="less" scoped>
.VisitingCard {
  position: relative;
  height: 100%;
  .main-info-placeholder {
    height: 40px;
  }
  .main-info {
    i {
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
