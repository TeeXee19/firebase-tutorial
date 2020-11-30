<template>
	<nav class="navbar navbar-dark bg-dark justify-content-center flex-nowrap flex-row">
      <div class="container">
        <router-link class="navbar-brand float-left">TeeXee</router-link>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label>
        	<span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent"> 
        	<ul class="navbar-nav mr-auto"></ul>
        	<ul class="navbar-nav ml-auto">
        		<template v-if="user.loggedIn">
        			<div class="nav-item">{{user.data.displayName}}</div>
        			<li class="nav-item">
        				<a class="nav-link" @click.prevent="signOut"></a>
        			</li>
        		</template>
        		<tempalte v-else>
        			<li>
        				<router-link :to="login" class="nav-link">Login</router-link>
        			</li>
        			<li>
        				<router-link :to="register" class="nav-link">Register</router-link>
        			</li>
        		</tempalte>
        	</ul>
        </div>
        
      </div>
      
    </nav>
</template>
<script>
	import { mapGetters } from 'vuex'
	import { auth } from "../firebaseDb"
	
	export default ({
	  computed: {
	  	mapGetters({
	  		user: "user"
	  	})
	  },
	  methods: {
	  	signOut() {
	  		auth.signOut()
	  		.then(() => {
	  			this.$router.replace({
	  				name: "home"
	  			});
	  		});
	  	}
	  }
	});
</script>