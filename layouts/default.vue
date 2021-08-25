<template>
  <v-app dark>
    <client-only>
      <v-navigation-drawer
        v-model="drawer"
        :mini-variant="miniVariant"
        :clipped="clipped"
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
        :clipped-left="clipped"
        fixed
        app
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title v-text="title" />
        <v-spacer />
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
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-information',
          title: 'About',
          to: '/about'
        },
        {
          icon: 'mdi-login-variant',
          title: 'Login',
          to: '/login',
          public: true
        },
        {
          icon: 'mdi-login-variant',
          title: 'Sign up',
          to: '/sign-up',
          public: true
        },
        {
          icon: 'mdi-account-circle',
          title: 'Admin panel',
          to: '/admin',
          protected: true
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Nuxt demo app'
    }
  },
  computed: {
    isLoggedIn () {
      return this.$store.getters['user/isLoggedIn']
    },
    menu () {
      return this.items.filter((i) => {
        if (!this.isLoggedIn) {
          return !i.protected
        } else {
          return !i.public
        }
      })
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
