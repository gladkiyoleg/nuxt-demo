<template>
  <div>
    <auth-form @on-submit="data => submitHandler(data)" />
  </div>
</template>

<script>
export default {
  methods: {
    submitHandler (data) {
      this.$store.dispatch('user/signUp', data)
    }
  }
}
</script>
