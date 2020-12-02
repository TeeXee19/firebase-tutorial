<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/dashboard">
        <i class="nc-icon nc-chart-pie-35"></i>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="add">
        <i class="nc-icon nc-circle-09"></i>
        <p>Add User</p>
      </sidebar-link>
      <sidebar-link to="list">
        <i class="nc-icon nc-notes"></i>
        <p>View List</p>
      </sidebar-link>

    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar">

      </dashboard-content>

    </div>
  </div>
</template>
<style lang="sass">
	
</style>

<script >
	import { mapGetters } from 'vuex'
import { auth } from '../firebaseDb'
import DashboardContent from './Content.vue'
  import TopNavbar from './TopNavbar.vue'
	
export default {
	components: {
	TopNavbar,
      DashboardContent
	},
computed: {
	...mapGetters({
		user: "user"
	})
},
methods: {
toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      },
signOut() {
auth.signOut()
	.then(() => {
	this.$router.replace({
			name: 'home'});});
 }
}
};
</script>