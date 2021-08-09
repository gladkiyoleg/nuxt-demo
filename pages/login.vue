<template>
  <div>
    <h1>Login page</h1>
    <auth-form @on-submit="data => submitHandler(data)" />
  </div>
</template>

<script>
import AuthForm from '@/components/AuthForm'

export default {
  components: {
    AuthForm
  },
  head () {
    return {
      title: 'Login'
    }
  },
  methods: {
    submitHandler (data) {
      this.$store.dispatch('user/login', data)
    }
  }
}
</script>
