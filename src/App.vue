<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-btn
          text
          :to="'/'"
          link
        >
          <span class="mr-2">Home</span>
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        text
        :to="'login'"
        link
        v-if="!isAuthenticated"
      >
        <span class="mr-2">Login</span>
        <v-icon>mdi-key</v-icon>
      </v-btn>
      <v-btn
        text
        @click="logout()"
        link
        v-if="isAuthenticated"
      >
        <span class="mr-2">Logout</span>
        <v-icon>mdi-key</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const {
  mapGetters: authMapGetter,
  mapActions: authMapActions
} = createNamespacedHelpers('auth')

export default {
  name: 'App',

  data(){
      return{
      }
  },
  mounted(){
  },
  methods:{
    ...authMapActions([
      'LOGOUT'
    ]),
    logout(){
      this.$store.state.services.loginService.logout()
      this.LOGOUT()
      this.$router.push('login')
    }
  },
  computed:{
    ...authMapGetter([
      'isAuthenticated',
      'menu',
      'permissions'
    ]),
  }
};
</script>
