<template>
  <div class="discover">
    <div class="header">
      <mu-tabs class="tab" full-width indicator-color="transparent">
        <mu-tab>
          <mu-icon color="#FFD600" :size="36" value="star"></mu-icon>
          Morment
        </mu-tab>
        <mu-tab>
          <mu-icon color="#FF4081" :size="36" value="location_on"></mu-icon>
          Nearby
        </mu-tab>
        <mu-tab>
          <mu-icon color="#866BFF" :size="36" value="terrain"></mu-icon>
          Interest
        </mu-tab>
      </mu-tabs>
    </div>
    <div class="split"></div>
    <mu-list class="menu">
      <mu-list-item class="item" button ripple>
        <mu-list-item-action>
          <mu-icon color="#64dd17" value="videocam"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>Live</mu-list-item-title>
        <mu-list-item-action>
          <mu-icon value="keyboard_arrow_right"></mu-icon>
        </mu-list-item-action>
      </mu-list-item>
      <mu-list-item class="item" button ripple>
        <mu-list-item-action>
          <mu-icon color="#d84315" value="video_library"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>Video</mu-list-item-title>
        <mu-list-item-action>
          <mu-icon value="keyboard_arrow_right"></mu-icon>
        </mu-list-item-action>
      </mu-list-item>
      <mu-list-item class="item" button ripple>
        <mu-list-item-action>
          <mu-icon color="#1976d2" value="headset"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>Music</mu-list-item-title>
        <mu-list-item-action>
          <mu-icon value="keyboard_arrow_right"></mu-icon>
        </mu-list-item-action>
      </mu-list-item>
    </mu-list>
    <div class="split"></div>
    <mu-list class="menu">
      <mu-list-item class="item" button ripple>
        <mu-list-item-action>
          <mu-icon color="#1e88e5" value="book"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>Book</mu-list-item-title>
        <mu-list-item-action>
          <mu-icon value="keyboard_arrow_right"></mu-icon>
        </mu-list-item-action>
      </mu-list-item>
      <mu-list-item class="item" button ripple>
        <mu-list-item-action>
          <mu-icon color="#ef6c00" value="whatshot"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>News</mu-list-item-title>
        <mu-list-item-action>
          <mu-icon value="keyboard_arrow_right"></mu-icon>
        </mu-list-item-action>
      </mu-list-item>
      <mu-list-item class="item" button ripple>
        <mu-list-item-action>
          <mu-icon color="#00e5ff" value="videogame_asset"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>Game</mu-list-item-title>
        <mu-list-item-action>
          <mu-icon value="keyboard_arrow_right"></mu-icon>
        </mu-list-item-action>
      </mu-list-item>
    </mu-list>
    <div class="split"></div>
    <mu-list class="menu">
      <mu-list-item class="item" button ripple>
        <mu-list-item-action>
          <mu-icon color="#1e88e5" value="shopping_cart"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>Mucket</mu-list-item-title>
        <mu-list-item-action>
          <mu-icon value="keyboard_arrow_right"></mu-icon>
        </mu-list-item-action>
      </mu-list-item>
    </mu-list>
  </div>
</template>

<script>
  export default {
    name: 'Discover'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .discover
    .header
      padding 0 4vw
      background: #fff
      .tab
        background transparent
        .mu-tab
          color #2e2c6b
          .mu-icon
            margin-bottom 0

    .split
      height 1vh
    .menu
      .item
        background #fff
        border-bottom 1px solid rgba(7, 17, 27, 0.1)
        &:last-child
          border-bottom none
</style>
