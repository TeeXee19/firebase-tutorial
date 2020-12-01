<template>
	<div class="container">
		<div class="col-md-8">
			<div class="card">
				<div class="card-header">Dashboard</div>
				<div class="card-body">
					<div v-if="user" class="alert alert-success" role="alert">You've been Logged In!</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script >
	import { mapGetters } from 'vuex'

	export default {
		computed: {
			...mapGetters({
				user: "user"
			})
		}
	};
</script>