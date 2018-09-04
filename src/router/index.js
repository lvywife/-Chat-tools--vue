import Vue from 'vue'
import Router from 'vue-router'

import Discover from '../components/discover/Discover'
import Friends from '../components/friends/Friends'
import Message from '../components/message/Message'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/discover', name: 'discover', component: Discover},
    {path: '/friends', name: 'friends', component: Friends},
    {path: '/message', name: 'message', component: Message}
  ],
  linkActiveClass: 'active'
})
