<template>
  <div>
    <h1>Profile page</h1>
    <div v-if="user">
      <p>id: {{ user.uid }}</p>
      <p>Email: {{ user.email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['authentication'],
  head () {
    return {
      title: 'Profile'
    }
  },
  computed: {
    user () {
      return this.$store.state.user.user
    }
  }
}
</script>
