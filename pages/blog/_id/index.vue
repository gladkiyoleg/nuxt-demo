<template>
  <div>
    <div class="breadcrumbs mt-4 mb-4">
      <nuxt-link :to="{name: 'blog'}">
        home
      </nuxt-link>
      <span>/{{ post.title }}</span>
    </div>
    <h1>{{ post.title }}</h1>
    <v-img
      :src="post.image"
      max-width="600px"
    />
    <p>{{ post.description }}</p>
  </div>
</template>

<script>
export default {
  async asyncData ({ store, params }) {
    const post = await store.dispatch('blog/fetchPost', params.id)
    return {
      post
    }
  },
  head () {
    return {
      title: this.post.title
    }
  }
}
</script>

<style lang="scss" scoped>
  .breadcrumbs {
    font-size: 14px;
    text-transform: lowercase;

    a {
      color: #fff;
      text-decoration: none;
    }
  }
</style>
