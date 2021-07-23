import Vuex from 'vuex'
import blog from '@/store/modules/blog'

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      blog
    }
  })
}

export default createStore
