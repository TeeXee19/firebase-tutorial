<template>
	<div class="container">
		<div  class="row justify-content-center">
			<div class="col-md-5">
				<div class="card">
					<div class="card-header">Register</div>
					<div class="card-body">
						<div v-if="error" class="alert alert-danger">{{error}}</div>
						<form action="#" @submit.prevent="submit">
							<div class="form-group">
								<label for="name" class=" col-form-label text-md-right">Name</label>
								<input type="tex" id="name" class="form-control" value required autofocus v-model="form.name">
							</div>
							<div class="form-group">
								<label for="email" class=" col-form-label text-md-right">Email</label>
								<input type="email" id="email" class="form-control" required autofocus v-model="form.email">
							</div>
							<div class="form-group">
								<label for="password" class=" col-form-label text-md-right">Password</label>
								<input type="password"  id="password" class="form-control" required v-model="form.password">
							</div>
							<div class="form-group row mb-0">
								<button type="submit" class="btn btn-primary">Register</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script >
	import { auth } from "../firebaseDb";

	export default {
		data() {
			return {
				form: {
					name: '',
					email: '',
					password: ''
				},
				error: null
			};
		},
		methods: {
			submit() {
				auth.createUserWithEmailAndPassword(this.form.email, this.form.password)
				.then(data => {
					data.user
						.updateProfile({
							displayName: this.form.name
						})
						.then(() => {});
				})
				.catch(err => {
					this.error = err.message;
				});
			}
		}
	};
</script>
