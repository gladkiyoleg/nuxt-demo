export default {
  namespaced: true,
  actions: {
    fetchPosts (_) {
      return this.$axios.$get('/posts')
    },
    fetchPost (_, id) {
      return this.$axios.$get(`/posts/${id}`)
    }
  }
}
