<template>
  <div class="Friendster">
    <mu-tabs :value.sync="linkman" color="green" indicator-color="yellow" full-width>
      <mu-tab>好友</mu-tab>
      <mu-tab>群聊</mu-tab>
      <mu-tab>新朋友</mu-tab>
    </mu-tabs>
    <div class="group-list" v-if="linkman === 0">
      <mu-expansion-panel v-for="(gruop) in groupList " :key="gruop.id">
        <div slot="header">{{gruop.name}}</div>
        <div class="main">
          <mu-list textline="two-line">
            <mu-list-item
              class="gruop-item"
              avatar
              button
              :ripple="false"
              v-for="(gruopItem) in gruop.friendList"
              :key="gruopItem.id"
            >
              <mu-list-item-action>
                <mu-avatar>
                  <img
                    src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3024387196,1621670548&fm=27&gp=0.jpg"
                    alt
                  />
                </mu-avatar>
              </mu-list-item-action>
              <mu-list-item-content>
                <mu-list-item-title>{{gruopItem.name}}</mu-list-item-title>
                <mu-list-item-sub-title>{{gruopItem.signature}}</mu-list-item-sub-title>
              </mu-list-item-content>
            </mu-list-item>
          </mu-list>
        </div>
      </mu-expansion-panel>
    </div>
    <div class="group-chat-list" v-if="linkman === 1">
      <mu-expansion-panel v-for="(groupChat) in groupChatList" :key="groupChat.id">
        <div slot="header">{{groupChat.name}}</div>
          <div class="main">
          <mu-list textline="two-line">
            <mu-list-item
              class="group-chat-item"
              avatar
              button
              :ripple="false"
              v-for="(groupChatItem) in groupChat.groupChatList"
              :key="groupChatItem.id"
            >
              <mu-list-item-action>
                <mu-avatar>
                  <img
                    src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3024387196,1621670548&fm=27&gp=0.jpg"
                    alt
                  />
                </mu-avatar>
              </mu-list-item-action>
              <mu-list-item-content>
                <mu-list-item-title>{{groupChatItem.name}}</mu-list-item-title>
              </mu-list-item-content>
            </mu-list-item>
          </mu-list>
        </div>



      </mu-expansion-panel>
    </div>
    <div class="new-friends" v-if="linkman === 2">新朋友</div>
  </div>
</template>
<script>
export default {
  name: "Friendster",
  data() {
    return {
      groupList: [
        {
          id: 1,
          name: "朋友",
          friendList: [
            { id: 1, name: "honey", signature: "你好呀" },
            { id: 2, name: "Lucy", signature: "你好呀" }
          ]
        },
        {
          id: 2,
          name: "家人",
          friendList: [
            { id: 3, name: "tony", signature: "打球吗" },
            { id: 4, name: "Hexi", signature: "不想打球" }
          ]
        },
        {
          id: 3,
          name: "同学",
          friendList: [
            { id: 5, name: "Jack", signature: "今天天气真好" },
            { id: 6, name: "rossi", signature: "心情还不错" }
          ]
        },
        {
          id: 4,
          name: "同事",
          friendList: [
            { id: 7, name: "Nash", signature: "今天天气真好" },
            { id: 8, name: "LuLi", signature: "" }
          ]
        }
      ],
      groupChatList: [
        {
          id: 1,
          name: "我创建的群",
          groupChatList: [
            { id: 1, name: "交友群"},
            { id: 2, name: "抱轩哥大腿上分"}
          ]
        },
        {
          id: 2,
          name: "我管理的群",
          groupChatList: [
            { id: 3, name: "好人圈"},
            { id: 4, name: "好好学习web前端"}
          ]
        },
        {
          id: 3,
          name: "我加入的群",
          groupChatList: [
          ]
        }],
      linkman: 0
    };
  }
};
</script>
<style lang="less" scoped>
.group-list,
.group-chat-list {
  .gruop-item,
  .group-chat-item {
    border-bottom: 1px solid #eee;
  }
  .gruop-item:nth-child(1),
  .group-chat-item:nth-child(1) {
    border-top: 1px solid #eee;
  }
  .mu-elevation-2 {
    box-shadow: none;
  }
}
</style>
