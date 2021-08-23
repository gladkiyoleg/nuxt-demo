<template>
  <div>
    <div class="breadcrumbs mt-4 mb-4">
      <nuxt-link to="/">
        home
      </nuxt-link>
      <span>/{{ post.title }}</span>
    </div>
    <h1>{{ post.title }}</h1>
    <div class="mb-3 mt-3">
      {{ post.date | dateFormat }}
    </div>
    <v-img
      :src="post.image"
      max-width="600px"
    />
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
export default {
  async asyncData ({ store, route, error }) {
    let post
    await store.dispatch('blog/fetchPost', route.params.postId).then((res) => {
      post = res.data
    }).catch((e) => {
      error(e)
    })
    return { post }
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
