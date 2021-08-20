<template>
  <div>
    <h1>Admin page</h1>
    <nuxt-link
      to="/admin/new-post"
      tag="v-btn"
      class="mt-6 mb-6"
    >
      Create new
    </nuxt-link>
    <posts-list :posts="posts" />
  </div>
</template>

<script>
export default {
  layout: 'admin',
  computed: {
    posts () {
      return this.$store.getters['blog/posts']
    }
  }
}
</script>
