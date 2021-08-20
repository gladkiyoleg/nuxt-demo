export default {
  actions: {
    async nuxtServerInit ({ dispatch }) {
      await dispatch('blog/fetchPosts')
    }
  }
}
