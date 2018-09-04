<template>
  <mu-bottom-nav>
    <mu-bottom-nav-item value="message" title="消息" to="/message" icon="chat_bubble_outline"></mu-bottom-nav-item>
    <mu-bottom-nav-item value="friends" title="联系人" to="/friends" icon="people"></mu-bottom-nav-item>
    <mu-bottom-nav-item value="discover" title="发现" to="/discover" icon="explore"></mu-bottom-nav-item>
  </mu-bottom-nav>
</template>

<script>
  export default {
    name: 'TabBar',
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .mu-bottom-item
    color rgba(0, 0, 0, 0.34)
    &.active
      color #2196f3
</style>
