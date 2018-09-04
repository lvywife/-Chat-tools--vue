import * as types from './mutation-types'
// that Vue实例对象 this.$
export const getAllData = async ({commit}, that) => {
  //es7 asyn函数
  let res = await that.axios.get('/api/self')
  let self = res.data.data

  res = await that.axios.get('/api/friends')
  let friends = res.data.data

  commit(types.RECEIVE_DATA, {self, friends})
}

export const showDialog = ({commit}, id) => {
  commit(types.CHANGE_ACTIVEID, id)
  commit(types.SHOW_DIALOG)
}

export const closeDialog = ({commit}) => {
  commit(types.CHANGE_ACTIVEID, 0)
  commit(types.CLOSE_DIALOG)
}