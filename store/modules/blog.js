export default {
  namespaced: true,
  state: {
    posts: []
  },
  mutations: {
    setPosts (state, data) {
      state.posts = data
    }
  },
  actions: {
    async fetchPosts ({ commit }) {
      const posts = await this.$axios.$get('/posts')
      commit('setPosts', posts)
    },
    fetchPost (_, id) {
      return this.$axios.$get(`/posts/${id}`)
    }
  }
}
