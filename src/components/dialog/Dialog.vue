<template>
  <div class="dialog">
    <mu-appbar style="width: 100%;background: #fff">
      <mu-button icon class="button" slot="left" @click="closeDialog">
        <mu-icon color="#2e2c6b" value="arrow_back"></mu-icon>
      </mu-button>
      {{activeFriend.name}}
      <div slot="right" class="right-nav">
        <mu-button icon class="button">
          <mu-icon color="#2e2c6b" value="videocam"></mu-icon>
        </mu-button>
        <mu-button icon class="button">
          <mu-icon color="#2e2c6b" value="call"></mu-icon>
        </mu-button>
        <mu-button icon class="button">
          <mu-icon color="#2e2c6b" value="person"></mu-icon>
        </mu-button>
      </div>
    </mu-appbar>
    <!--聊天内容区域-->
    <div></div>
    <div class="footer">
      <div class="top">
        <mu-text-field v-model="value" placeholder="Please input......"></mu-text-field>
        <mu-button icon class="button">
          <mu-icon color="#2e2c6b" value="send"></mu-icon>
        </mu-button>
      </div>
      <div class="bottom">
        <mu-button icon class="button">
          <mu-icon color="#2e2c6b" value="mic_none"></mu-icon>
        </mu-button>
        <mu-button icon class="button">
          <mu-icon color="#2e2c6b" value="photo_size_select_actual"></mu-icon>
        </mu-button>
        <mu-button icon class="button">
          <mu-icon color="#2e2c6b" value="tag_faces"></mu-icon>
        </mu-button>
        <mu-button icon class="button">
          <mu-icon color="#2e2c6b" value="switch_video"></mu-icon>
        </mu-button>
        <mu-button icon class="button">
          <mu-icon color="#2e2c6b" value="cloud_queue"></mu-icon>
        </mu-button>
        <mu-button icon class="button">
          <mu-icon color="#2e2c6b" value="photo_camera"></mu-icon>
        </mu-button>
        <mu-button icon class="button">
          <mu-icon color="#2e2c6b" value="folder_open"></mu-icon>
        </mu-button>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'Dialog',
    data() {
      return {
        value: ''
      }
    },
    computed: mapGetters(['activeFriend']),
    methods: mapActions(['closeDialog'])
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .dialog
    position absolute
    z-index 999
    top 0
    left 0
    width 100%
    height 100vh
    background #fafafa
    .mu-appbar-left
      padding-right 0
    .mu-appbar-title
      padding-left 0
    .footer
      position fixed
      bottom 0
      left 0
      width 100%
      height 90px
      text-align center
      background #fff
      .top
        display: flex
        justify-content center
        padding 0 18px
        .mu-input
          flex 1
          margin-bottom 0


</style>
