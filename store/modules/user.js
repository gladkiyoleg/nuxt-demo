const initialState = () => {
  return {
    user: null,
    idToken: null
  }
}

export default {
  namespaced: true,
  state: initialState,
  mutations: {
    SET_USER (state, authUser) {
      state.user = {
        uid: authUser.uid,
        email: authUser.email
      }
    },
    SET_ID_TOKEN (state, data) {
      state.idToken = data
    },
    RESET_STORE (state) {
      Object.assign(state, initialState())
    }
  },
  getters: {
    isLoggedIn (state) {
      return state.user && !!state.user.uid
    }
  },
  actions: {
    login ({ commit }, data) {
      this.$fire.auth.signInWithEmailAndPassword(data.email, data.password).then((userCredential) => {
        commit('SET_USER', userCredential.user)
        this.$router.push('/profile')
      })
    },
    logout ({ commit }) {
      this.$fire.auth.signOut().then(() => {
        commit('RESET_STORE')
        this.$router.push('/')
      })
    },
    onAuthStateChanged ({ commit }, { authUser }) {
      if (!authUser) {
        commit('RESET_STORE')
        return
      }
      if (authUser && authUser.getIdToken) {
        authUser.getIdToken(true).then((res) => {
          commit('SET_ID_TOKEN', res)
        })
      }
      commit('SET_USER', authUser)
    }
  }
}
