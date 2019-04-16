import state from './state';
import mutations from './mutations';
import getters from './getters'

export default {
  namespaced: true, // 多出的一行
  state,
  mutations,
  getters
}