<template>
	<div class="bg">
	<div class="container pt-5" >
		<div  class="row justify-content-center">

			<div class="col-md-5">
				<card >
					<template slot="header">
						<h3 class="card-title">Login</h3>
					</template> 
					<div class="card-body">
						<div v-if="error" class="alert alert-danger">{{error}}</div>
						<form action="#" @submit.prevent="submit">
							<div class="form-group">
								<label for="email" class=" col-form-label text-md-right">Email</label>
								<input type="email" id="email" class="form-control" value required autofocus v-model="form.email">
							</div>
							<div class="form-group">
								<label for="password" class=" col-form-label text-md-right">Password</label>
								<input type="password"  id="password" class="form-control" required v-model="form.password">
							</div>
							<div class="form-group mb-0">
								<button type="submit" class="btn btn-primary">Login</button>
							</div>
						</form>
					</div>
				</card>
			</div>
		</div>
	</div>
</div>
</template>
<script ></script>

<script >
	import { auth } from "../firebaseDb"
	import Card from './Cards/Card.vue'

	export default {
		components:{
			Card
		},
		data() {
			return {
				form: {
					email: '',
					password: ''
				},
				error: null
			};
		},
		methods: {
			submit() {
				auth.signInWithEmailAndPassword(this.form.email, this.form.password)
				.then(data => {
					this.$router.replace({name: 'Dashboard'});
				})
				.catch(err => {
					this.error = err.message;
				});
			}
		}
	};
</script>
