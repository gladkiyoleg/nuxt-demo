<template>
  <div>
    <h1>Home page</h1>
    <posts-list :posts="posts" />
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Home'
    }
  },
  computed: {
    posts () {
      return this.$store.getters['blog/posts']
    }
  }
}
</script>
