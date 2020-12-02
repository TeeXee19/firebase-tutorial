<template>
<nav class="navbar navbar-dark bg-dark justify-content-center flex-nowrap flex-row">
     <div class="container">
        <router-link to="/" class="navbar-brand">TeeXee</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label>
	<span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent"> 
<ul class="navbar-nav mr-auto"></ul>
	<ul class="navbar-nav ml-auto">
<template v-if="user.loggedIn">
<div class="nav-item">{{user.data.displayName}}</div>
 <li class="nav-item">
  <router-link class="nav-link pr-3" to="/">Add User</router-link>
</li>
<li class="nav-item">
   <router-link class="nav-link pr-3" to="/list">View User</router-link>
 </li>
 <li class="nav-item">
	<a class="nav-link" @click.prevent="signOut"></a>
  </li>
	</template>
	<template v-else>
		<li>
				<router-link to="login" class="nav-link">Login</router-link>
		</li>
	<li>
	<router-link to="register" class="nav-link">Register</router-link>
		</li>
	</template>
	</ul>
        </div>  
      </div> 
   </nav>
</template>
<script>

</script>