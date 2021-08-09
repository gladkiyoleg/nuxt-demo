<template>
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
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: 'admin@mail.com',
        password: '123456'
      },
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required'
      ],
      valid: true
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
