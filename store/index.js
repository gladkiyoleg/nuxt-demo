import Vuex from 'vuex'
import blog from '@/store/modules/blog'
import user from '@/store/modules/user'

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      blog,
      user
    }
  })
}

export default createStore
