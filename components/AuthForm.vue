<template>
  <div>
    <h1>{{ header }}</h1>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      class="mt-6 mb-6"
    >
      <v-text-field
        v-model="form.email"
        label="Email"
        :rules="emailRules"
      />
      <v-text-field
        v-model="form.password"
        label="Password"
        :rules="passwordRules"
        type="password"
      />
      <v-btn
        color="success"
        class="mt-4"
        @click="submit"
      >
        Submit
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import { emailRules, passwordRules } from '@/utils/consts/formRules'

export default {
  props: {
    isLogin: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      emailRules,
      passwordRules,
      valid: true
    }
  },
  computed: {
    header () {
      return this.isLogin ? 'Login page' : 'Sign up page'
    }
  },
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        this.$emit('on-submit', this.form)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
