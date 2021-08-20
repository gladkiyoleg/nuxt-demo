const initialState = () => {
  return {
    posts: []
  }
}

export default {
  namespaced: true,
  state: initialState,
  mutations: {
    SET_POSTS (state, data) {
      state.posts = data
    }
  },
  getters: {
    posts: (state) => {
      return state.posts
    }
  },
  actions: {
    fetchPosts ({ commit }) {
      return this.$axios.get('/posts.json').then((res) => {
        const posts = []
        for (const key in res.data) {
          posts.push({ ...res.data[key], id: key })
        }
        commit('SET_POSTS', posts)
      })
    },
    fetchPost (_, id) {
      return this.$axios.get(`/posts/${id}.json`)
    },
    createPost (_, data) {
      return this.$axios.post('/posts.json', data)
    }
  }
}
