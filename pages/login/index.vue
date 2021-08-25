<template>
  <div>
    <auth-form :is-login="true" @on-submit="data => submitHandler(data)" />
  </div>
</template>

<script>
export default {
  methods: {
    submitHandler (data) {
      this.$store.dispatch('user/login', data)
    }
  }
}
</script>
