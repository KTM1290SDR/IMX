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
              to="/VisitingCard"
            >
              <mu-list-item-action>
                <mu-avatar>
                  <img src="@/assets/img/toux.jpg" alt />
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
                  <img src="@/assets/img/toux.jpg" alt />
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
    <div class="new-friends" v-if="linkman === 2">
      <mu-list textline="two-line" class="new-friends-list" >
        <mu-list-item to="/VisitingCard" avatar button :ripple="false" class="new-friends-item" v-for="(newFriendsItem) in newFriendsList" :key="newFriendsItem.id">
          <mu-list-item-action >
            <mu-avatar>
              <img src="@/assets/img/toux.jpg" alt />
            </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-content>
            <mu-list-item-title>{{newFriendsItem.name}}</mu-list-item-title>
            <mu-list-item-sub-title>{{newFriendsItem.verification}}</mu-list-item-sub-title>
          </mu-list-item-content>
          <mu-list-item-action>
            <mu-button v-if="newFriendsItem.isAgree==0" @click.prevent round small color="primary">接受</mu-button>
            <mu-button v-if="newFriendsItem.isAgree==0" @click.prevent round small color="red">拒绝</mu-button>
            <mu-badge v-else-if="newFriendsItem.isAgree==1" content="已接受" color="primary"></mu-badge>
            <mu-badge v-else-if="newFriendsItem.isAgree==2" content="已拒绝" color="red"></mu-badge>
          </mu-list-item-action>
        </mu-list-item>
      </mu-list>
    </div>
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
            { id: 1, name: "交友群" },
            { id: 2, name: "抱轩哥大腿上分" }
          ]
        },
        {
          id: 2,
          name: "我管理的群",
          groupChatList: [
            { id: 3, name: "好人圈" },
            { id: 4, name: "好好学习web前端" }
          ]
        },
        {
          id: 3,
          name: "我加入的群",
          groupChatList: []
        }
      ],
      newFriendsList:[
        {id:1,name:"许宇轩",verification:"加我为好友吧",isAgree:0},
        {id:2,name:"徐建华",verification:"上网吗",isAgree:2},
        {id:3,name:"马子黎",verification:"喜欢你好久了",isAgree:1}
      ],
      linkman: 0
    };
  }
};
</script>
<style lang="less" scoped>
.new-friends {
  .mu-item-action {
    flex-direction: row;
    align-items: center;
    .mu-button {
      min-width: 50px;
    }
    .mu-button:nth-child(1) {
      margin-right: 10px;
    }
  }
}
.new-friends-list {
  .new-friends-item {
    background-color: #fff;
  }
}
.new-friends-list,
.group-list,
.group-chat-list {
  .gruop-item,
  .group-chat-item,
  .new-friends-item {
    border-bottom: 1px solid #eee;
  }
  .gruop-item:nth-child(1),
  .group-chat-item:nth-child(1),
  .new-friends-item:nth-child(1) {
    border-top: 1px solid #eee;
  }
  .mu-elevation-2 {
    box-shadow: none;
  }
}
</style>
