<template>
  <div class="Contact" ref="Contact" >
    <div class="btn-fixed">
      <mu-button fab color="#4caf50" small>
        <i class="iconfont iconhaoyou"></i>
      </mu-button>
      <mu-button fab color="#4caf50" small @click="()=>this.$refs.Contact.scrollTo(0,0)">
        <i class="iconfont iconhaoyou"></i>
      </mu-button>
    </div>
    <div class="img-top">
      <img src="@/assets/img/timg.jpg" alt />
      <div class="myAvatar">
        <mu-avatar size="60">
          <img src="@/assets/img/toux.jpg" />
        </mu-avatar>
      </div>
    </div>
    <div class="contact-list">
      <div class="tab-state"  >
        <mu-tabs :value.sync="stateType" color="green" indicator-color="yellow" full-width>
          <mu-tab>好友动态</mu-tab>
          <mu-tab>我的动态</mu-tab>
        </mu-tabs>
      </div>
      <div class="friend-state" v-if="stateType === 0" ref="tabState">
        <ul>
          <li
            class="state-item"
            v-for=" (friendStateItem) in friendStateList"
            :key="friendStateItem.id"
          >
            <mu-card style="width: 100%; ">
              <mu-card-header
                :title="friendStateItem.friendName"
                :sub-title="friendStateItem.stateDate"
              >
                <mu-avatar slot="avatar">
                  <img src="@/assets/img/toux.jpg" />
                </mu-avatar>
              </mu-card-header>
              <mu-card-text>{{friendStateItem.stateContent}}</mu-card-text>
              <mu-card-media v-if="friendStateItem.stateImgList.length>0">
                <img src="@/assets/img/timg.jpg" />
              </mu-card-media>
              <div class="comment-list" v-if="friendStateItem.commentList.length>0">
                <ul>
                  <li
                    class="comment-item"
                    v-for="(commentItem) in friendStateItem.commentList"
                    :key="commentItem.id"
                  >
                    <span class="comment-name">{{commentItem.commentName}}:</span>
                    <span class="comment-content">{{commentItem.commentContent}}</span>
                  </li>
                </ul>
              </div>
              <mu-card-actions>
                <div class="comment-btn">我来说两句...</div>
              </mu-card-actions>
            </mu-card>
          </li>
        </ul>
      </div>
      <div class="my-state" v-if="stateType === 1">我的动态</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Contact",
  data() {
    return {
      stateType: 0,
      friendStateList: [
        {
          id: 1,
          friendName: "Myron Avatar",
          friendAvatar: "@/assets/img/toux.jpg",
          stateDate: "2019-7-17 19:15:23",
          stateContent:
            "散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！",
          stateImgList: [{ id: 1, imgSrc: "@/assets/img/timg.jpg" }],
          commentList: [
            { id: 1, commentName: "许宇轩", commentContent: "有空一起飙车" },
            { id: 2, commentName: "欧宇翔", commentContent: "雁山等你" }
          ]
        },
        {
          id: 2,
          friendName: "Tony",
          stateDate: "2019-2-17 11:15:23",
          stateContent: "今天又是充满希望的一天",
          stateImgList: [],
          commentList: []
        }
      ]
    };
  },

  methods: {
  }
};
</script>
<style lang="less" scoped>
.Contact {
  height: calc(100vh - 105px);
  overflow: auto;
  .is-nav-fixed {
    position: fixed;
    z-index: 1;
    width: 100%;
    top: 55px;
  }
  .btn-fixed {
    position: fixed;
    right: 20px;
    bottom: 70px;
    z-index: 500;
    display: flex;
    flex-direction: column;
    .mu-button:nth-child(1) {
      margin-bottom: 20px;
    }
  }
  .state-item {
    margin-bottom: 20px;
  }
  ul,
  li {
    .mu-card {
      box-shadow: 1px 1px 4px 0px #ccc;
    }
    margin: 0;
    padding: 0;
    list-style: none;
    .mu-card-media {
      padding: 0 5px 10px 5px;
      //   display: flex;
      //    flex-wrap: wrap;
      //     justify-content: space-between;
      //     align-items: center;
      //   img {
      //     flex: 1;
      //     width: 30vw;
      //     height: 30vw;
      //     object-fit: cover;
      //     max-width: none;
      //     min-width: unset;
      //   }
    }
    .comment-list {
      padding: 5px 10px;
      margin: 0 5px;
      border-top: 1px solid #eee;
      .comment-item {
        padding: 2px 0;
        .comment-name {
          color: #2196f3;
        }
      }
    }
    .comment-btn {
      background-color: #e6e6e6;
      color: #9e9e9e;
      border-radius: 10px;
      padding: 0 10px;
    }
    .mu-card-header {
      padding-bottom: 0;
    }
  }
  .myAvatar {
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    border-radius: 50%;
    height: 70px;
    width: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 10%;
    right: 10%;
  }
  .img-top {
    width: 100%;
    height: 25vh;
    position: relative;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>
