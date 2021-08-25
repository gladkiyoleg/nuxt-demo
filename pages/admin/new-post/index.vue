<template>
  <div>
    <h1>Create post</h1>
    <nuxt-link
      to="/admin"
      tag="v-btn"
      class="mb-6 mt-6"
    >
      Back
    </nuxt-link>
    <v-form
      ref="form"
      lazy-validation
      class="mt-6 mb-6"
    >
      <v-text-field
        v-model="post.title"
        label="Title"
        :rules="requiredFieldRules"
      />
      <v-text-field
        v-model="post.body"
        label="Body"
        :rules="requiredFieldRules"
      />
      <v-text-field
        v-model="post.image"
        label="Image URL"
        :rules="requiredFieldRules"
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
import { mapActions } from 'vuex'
import { requiredFieldRules } from '@/utils/consts/formRules'

export default {
  layout: 'admin',
  data () {
    return {
      requiredFieldRules,
      post: {
        title: '',
        body: '',
        image: ''
      }
    }
  },
  methods: {
    ...mapActions({
      createPost: 'blog/createPost'
    }),
    submit () {
      if (this.$refs.form.validate()) {
        this.post.date = new Date()
        this.createPost(this.post).then(() => {
          this.$router.push('/admin')
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
