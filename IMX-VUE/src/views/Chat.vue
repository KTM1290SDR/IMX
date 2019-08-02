<template>
  <div class="Chat">
    <mu-appbar class="top-nav" style="width: 100%;" color="teal">
      <mu-button icon slot="left">
        <i class="iconfont iconxiaoxi"></i>
      </mu-button>
      <div class="f-name">许宇轩</div>
      <mu-button flat slot="right">
        <i class="iconfont iconxiaoxi"></i>
      </mu-button>
    </mu-appbar>
    <div class="top-nav-placeholder"></div>
    <div class="mian">
      <ul class="Chat-list">
        <li class="Chat-item Other">
          <mu-avatar size="50">
            <img src="@/assets/img/toux.jpg" />
          </mu-avatar>
          <div class="Chat-content">一起双排下路套路稳！一起双排下路套路稳！一起双排下路套路稳！一起双排下路套路稳！一起双排下路套路稳！</div>
        </li>
        <li class="Chat-item Other">
          <mu-avatar size="50">
            <img src="@/assets/img/toux.jpg" />
          </mu-avatar>
          <div class="Chat-content">一起双排下路套路稳！一起双排下路套路稳！一起双排下路套路稳！一起双排下路套路稳！一起双排下路套路稳！</div>
        </li>
        <li class="Chat-item Other">
          <mu-avatar size="50">
            <img src="@/assets/img/toux.jpg" />
          </mu-avatar>
          <div class="Chat-content">一起双排下路套路稳！一起双排下路套路稳！一起双排下路套路稳！一起双排下路套路稳！一起双排下路套路稳！</div>
        </li>
        <li class="Chat-item Other">
          <mu-avatar size="50">
            <img src="@/assets/img/toux.jpg" />
          </mu-avatar>
          <div class="Chat-content">一起双排下路套路稳！一起双排下路套路稳！一起双排下路套路稳！一起双排下路套路稳！一起双排下路套路稳！</div>
        </li>
        <li class="Chat-item oneself">
          <mu-avatar size="50">
            <img src="@/assets/img/toux.jpg" />
          </mu-avatar>
          <div class="Chat-content">好的馬上就來好的馬上就來好的馬上就來</div>
        </li>
      </ul>
    </div>
    <div class="input-box-placeholder"></div>
    <div class="input-box">
      <div class="input-top">
        <mu-text-field v-model=" value9" solo multi-line :rows="1" :rows-max="6"></mu-text-field>
        <mu-button round small color="success">发送</mu-button>
      </div>
      <div class="input-btm">
        <i class="iconfont iconxiaoxi"></i>
        <i class="iconfont iconxiaoxi"></i>
        <i class="iconfont iconxiaoxi"></i>
        <i class="iconfont iconxiaoxi"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Chat",
  data() {
    return {
      value9: ""
    };
  }
};
</script>
<style lang="less" scoped>
.Chat {
  height: 100%;
  position: relative;
  .top-nav-placeholder {
    height: 55px;
  }
  .top-nav {
    position: fixed;
    top: 0;
  }
  .f-name {
    font-size: 16px;
    text-align: center;
  }
  .mu-elevation-4 {
    box-shadow: none;
  }
  .mian {
    background-color: aliceblue;
    height: calc(100% - 120px);
    overflow: auto;
    padding-bottom: 20px;
    .Chat-item {
      display: flex;
      padding-right: 20%;
      margin-top: 20px;
      .mu-avatar {
        min-width: 50px;
        margin: 0 15px;
      }
      .Chat-content {
        background-color: #4caf50;
        color: #ffffff;
        align-self: flex-start;
        padding: 5px;
      }
    }
    .Chat-item.oneself {
      padding-left: 20%;
      padding-right: 0;
      flex-direction: row-reverse;
    }
  }
  .input-box {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: teal;
    padding: 10px 10px 0 10px;
    .input-btm {
      display: flex;
      justify-content: space-around;
      i {
        font-size: 20px;
        color: #4caf50;
      }
    }
    .input-top {
      display: flex;
      align-items: flex-end;
      .mu-raised-button {
        margin: 0 5px;
        min-width: 55px;
      }
      .multi-line {
        flex: 1;
        outline: none;
        border-radius: 5px;
        border: none;
        padding: 0 5px;
        background-color: #ffffff;
        min-height: auto;
      }
    }
  }
}
</style>
