<template>
  <div>
    <div class="post-wrapper">
      <nuxt-link
        v-for="post in posts"
        :key="post.id"
        :to="`/${post.id}`"
        class="post"
      >
        <v-card class="post-card">
          <v-img
            :src="post.image"
            width="250px"
            height="200px"
          />
          <h4 class="h4 text-center">
            {{ post.title }}
          </h4>
        </v-card>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      default: () => [],
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .post-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
  .post-card {
    width: 250px;
  }
  .post {
    text-decoration: none;
  }
  .h4 {
    padding: 10px 0;
  }
</style>
