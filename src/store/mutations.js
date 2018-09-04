import * as types from './mutation-types'

const mutations = {
  [types.RECEIVE_DATA](state, data) {
    // 将获取的ajax数据赋值给state,data
    state.data = data
    console.log('success', data)
  },
  // 侧边栏
  [types.TOGGLE_SLIDERBAR](state, flag) {
    state.sliderbar.open = !state.sliderbar.open
    state.sliderbar.docked = !flag
  },
  [types.CHANGE_TITLE](state, title) {
    state.title = title
  },
  [types.TOGGLE_PERSONVIEW](state, index) {
    state.personindex = index !== undefined ? index : -1
    console.log(state.personindex, index)
  },
  [types.SHOW_DIALOG](state) {
    state.dialog = true
  },
  [types.CLOSE_DIALOG](state) {
    state.dialog = false
  },
  [types.CHANGE_ACTIVEID](state, id) {
    state.activeId = id
  }
}

export default mutations