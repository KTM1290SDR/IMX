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
            <mu-list-item button>
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
          </mu-tab> -->
        </mu-tabs>
      </mu-container>
    </div>
    <div class="btm-placeholder"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "消息"
    };
  },
  created() {
    console.log(localStorage);
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
    i{
      font-size: 20px;
    }
  }
  .mu-tabs {
    justify-content: space-between;
  }
}
</style>
