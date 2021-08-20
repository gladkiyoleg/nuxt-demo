<template>
  <div>
    <auth-form @on-submit="data => submitHandler(data)" />
  </div>
</template>

<script>
import AuthForm from '@/components/AuthForm'

export default {
  components: {
    AuthForm
  },
  methods: {
    submitHandler (data) {
      this.$store.dispatch('user/login', data)
    }
  }
}
</script>
