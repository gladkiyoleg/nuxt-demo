export default {
  namespaced: true,
  state: {
    posts: []
  },
  mutations: {
    SET_POSTS (state, data) {
      state.posts = data
    }
  },
  actions: {
    async fetchPosts ({ commit }) {
      const posts = await this.$axios.$get('/posts')
      commit('SET_POSTS', posts)
    },
    fetchPost (_, id) {
      return this.$axios.$get(`/posts/${id}`)
    }
  }
}
