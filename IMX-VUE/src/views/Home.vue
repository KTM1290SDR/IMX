<template>
  <div id="Home">
    <div class="nav-top">
      <mu-appbar style="width: 100%;" color="teal">
        <div class="head-img" slot="left">
          <router-link to="/VisitingCard">
            <img src="@/assets/img/toux.jpg" alt />
          </router-link>
        </div>
        <div class="nav-hint">{{title}}</div>
        <mu-menu slot="right">
          <mu-button flat>
            <i class="iconfont iconxiaoxi"></i>
          </mu-button>
          <mu-list slot="content">
            <mu-list-item button>
              <mu-list-item-content>
                <mu-list-item-title>创建群聊</mu-list-item-title>
              </mu-list-item-content>
            </mu-list-item>
            <mu-list-item button @click="addFormAlert=true">
              <mu-list-item-content>
                <mu-list-item-title>加好友/群</mu-list-item-title>
              </mu-list-item-content>
            </mu-list-item>
            <mu-list-item button>
              <mu-list-item-content>
                <mu-list-item-title>发朋友圈</mu-list-item-title>
              </mu-list-item-content>
            </mu-list-item>
          </mu-list>
        </mu-menu>
      </mu-appbar>
    </div>
    <div class="top-placeholder"></div>
    <div class="search"></div>
    <div class="main">
      <router-view />
    </div>
    <div></div>
    <div class="nav-btm">
      <mu-container>
        <mu-tabs color="teal" @change="changeTitle">
          <mu-tab exact to="/Message">
            <mu-badge content="36" circle color="red" class="demo-icon-badge">
              <i class="iconfont iconxiaoxi"></i>
            </mu-badge>
          </mu-tab>
          <mu-tab exact to="/Friendster">
            <i class="iconfont iconhaoyou"></i>
          </mu-tab>
          <mu-tab exact to="/Contact">
            <i class="iconfont iconpengyouquan"></i>
          </mu-tab>
          <!-- <mu-tab exact to="/Aspect">
            <i class="iconfont iconluntan"></i>
          </mu-tab>-->
        </mu-tabs>
      </mu-container>
    </div>
    <div class="btm-placeholder"></div>
    <mu-dialog
      title="查找好友/群"
      width="600"
      max-width="80%"
      :esc-press-close="false"
      :overlay-close="false"
      :open.sync="addFormAlert"
    >
      <div>
        <mu-form
          :model="addForm"
          class="addForm"
          label-position="left"
          label-width="100"
          ref="addForm"
        >
          <mu-form-item label="输入IMX号" prop="IMXnumber" :rules="IMXnumberRules">
            <mu-text-field v-model="addForm.IMXnumber" prop="IMXnumber"></mu-text-field>
          </mu-form-item>
          <mu-form-item prop="radio" label="类型">
            <mu-radio v-model="addForm.IMXtype" value="0" label="用户"></mu-radio>
            <mu-radio v-model="addForm.IMXtype" value="1" label="群"></mu-radio>
          </mu-form-item>
        </mu-form>
      </div>
      <mu-button slot="actions" flat color="primary" @click="find()">查找</mu-button>
      <mu-button slot="actions" flat color="primary" @click=" clear ()">关闭</mu-button>
    </mu-dialog>
  </div>
</template>
<script>
import jwtDecode from "jwt-decode";
export default {
  data() {
    return {
      title: "消息",
      addForm: {
        IMXnumber: "",
        IMXtype: "0"
      },
      addFormAlert: false,
      IMXnumberRules: [
        {
          validate: val => val.length >= 6 && val.length <= 10,
          message: "IMX号必须6-10位"
        }
      ]
    };
  },
  created() {
    console.log(this.$store.getters.getUserInfo.data);
    this.sendMessageToServer();
  },
  methods: {
    changeTitle() {
      if (this.$route.path === "/Message") {
        this.title = "消息";
      } else if (this.$route.path === "/Friendster") {
        this.title = "联系人";
      } else if (this.$route.path === "/Contact") {
        this.title = "朋友圈";
      } else {
        this.title = "论坛";
      }
    },
    sendMessageToServer() {
      this.$socket.emit("chat", "好的");
    },
    clear() {
      this.addFormAlert = false;
      this.$refs.addForm.clear();
      this.addForm = {
        IMXnumber: " ",
        IMXtype: "0"
      };
    },
    //查找好友/群
    find() {
      this.$refs.addForm.validate().then(result => {
        if (result) {
          this.axios.post("/api/findUesr", this.addForm).then(res => {
            console.log(res.data.data);
            if (res.data.data.hasUesr) {
              this.$router.push({
                path: "/VisitingCard",
                query: {
                  userId: res.data.data.IMXnumber
                }
              });
            } else {
              this.$toast.message("用户不存在");
            }
          });
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.btm-placeholder {
  height: 50px;
}
.top-placeholder {
  height: 55px;
}
.nav-top {
  position: fixed;
  z-index: 999;
  width: 100%;
  .mu-elevation-4 {
    box-shadow: none;
  }
  .head-img {
    border-radius: 50%;
    height: 35px;
    width: 35px;
    overflow: hidden;
    margin-left: 10px;
  }
  .head-img img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .nav-hint {
    text-align: center;
    font-size: 16px;
  }
  .mu-icon-button {
    height: 35px;
    width: 35px;
  }
}
.nav-btm {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  .container {
    padding: 0;
    i {
      font-size: 20px;
    }
  }
  .mu-tabs {
    justify-content: space-between;
  }
}
</style>
