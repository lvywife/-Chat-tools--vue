// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import MuseUI from './muse-ui.config'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.use(MuseUI)

// import MuseUI from 'muse-ui';
// import 'muse-ui/dist/muse-ui.css';

Vue.use(MuseUI);

Vue.config.productionTip = false

router.replace('message')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>',
  beforeCreate() {
    this.$store.dispatch('getAllData', this)
  }
})
// 全局守卫
router.beforeEach((to, from, next) => {
  let path = to.path
  if (path === '/discover' || path === '/friends' || path === '/message') {
    store.commit('CHANGE_TITLE', to.name)
  }
  next()
})