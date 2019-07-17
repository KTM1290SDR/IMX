<template>
  <div class="Message">
    <div class="mess-list">
      <mu-list textline="two-line">
        <mu-list-item
          v-for="(messItem) in messList"
          class="mess-item"
          :key="messItem.id"
          avatar
          button
          :ripple="false"
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
            <mu-list-item-title>{{messItem.name}}</mu-list-item-title>
            <mu-list-item-sub-title>
              <span v-if="messItem.type==='groupChat'">{{messItem.lastName}}: </span>
              {{messItem.content}}
            </mu-list-item-sub-title>
          </mu-list-item-content>
          <mu-list-item-action>
            <mu-badge content="12" color="red"></mu-badge>
          </mu-list-item-action>
        </mu-list-item>
      </mu-list>
    </div>
  </div>
</template>
<script>
export default {
  name: "Message",
  data() {
    return {
      messList: [
        { id: 1, name: "Photos", content: "出来上网吗？", type: "friend" },
        { id: 2, name: "Recipes", content: "吃了饭了吗？", type: "friend" },
        {
          id: 3,
          name: "Work",
          content: "有个电影很好看要一起去看吗？",
          type: "friend"
        },
        {
          id: 4,
          name: "抱轩哥大腿上分",
          content: "有个电影很好看要一起去看吗？",
          lastName: "许宇轩",
          type: "groupChat"
        },
        {
          id: 5,
          name: "web前端",
          content: "一起学习vue",
          lastName: "许宇轩",
          type: "groupChat"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.mess-list {
  .mess-item {
    border-bottom: 1px solid #eee;
  }
}
</style>
