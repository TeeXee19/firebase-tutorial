<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <button type="button"
              class="navbar-toggler navbar-toggler-right"
              :class="{toggled: $sidebar.showSidebar}"
              aria-controls="navigation-index"
              aria-expanded="false"
              aria-label="Toggle navigation"
              @click="toggleSidebar">
        <span class="navbar-toggler-bar burger-lines"></span>
        <span class="navbar-toggler-bar burger-lines"></span>
        <span class="navbar-toggler-bar burger-lines"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end">
        <ul class="nav navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#" data-toggle="dropdown">
              <i class="nc-icon nc-palette"></i>
            </a>
          </li>
          <li class="nav-item">
            {{user.data.displayName}}
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">
              Account
            </a>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link" @click.prevent="signOut">Log Out</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapGetters } from 'vuex'
import { auth } from '../firebaseDb'
  export default {
    computed: {
  ...mapGetters({
    user: "user"
    }),
      routeName () {
        const {name} = this.$route
        return this.capitalizeFirstLetter(name)
      }
    },
    data () {
      return {
        activeNotifications: false
      }
    },
    methods: {
      capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
      },

      toggleSidebar () {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
      },
      hideSidebar () {
        this.$sidebar.displaySidebar(false)
      },
      signOut() {
      auth.signOut()
        .then(() => {
        this.$router.replace({
            name: 'Login'});});
       }
    }
  }

</script>
<style>

</style>
