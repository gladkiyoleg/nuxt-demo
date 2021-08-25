<template>
  <v-app dark>
    <client-only>
      <v-navigation-drawer
        v-model="drawer"
        fixed
        app
      >
        <v-list>
          <v-list-item
            v-for="(item, i) in menu"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar
        fixed
        app
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title v-text="title" />
        <v-spacer />
        <span>{{ userEmail }}</span>
        <v-btn
          v-if="isLoggedIn"
          text
          icon
          @click="logout"
        >
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </v-app-bar>
    </client-only>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  middleware: ['authentication'],
  data () {
    return {
      drawer: false,
      title: 'Admin panel'
    }
  },
  computed: {
    isLoggedIn () {
      return this.$store.getters['user/isLoggedIn']
    },
    userEmail () {
      return this.$store.state.user.user && this.$store.state.user.user.email
    },
    menu () {
      return [{
        icon: 'mdi-home',
        title: 'Home',
        to: '/'
      }]
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('user/logout')
    }
  }
}
</script>

<style lang="scss" scoped>
  ::v-deep.v-list-item {
    cursor: pointer;
  }
</style>
