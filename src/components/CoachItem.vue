<template>
	<section class="coach-item">
		<h3>{{ fullName }}</h3>
		<h4>$ {{ rate }}/hour</h4>
		<div class="experties">
			<span
				v-for="area in areas"
				:key="area"
				>{{ area }}</span
			>
		</div>
		<div class="actions">
			<router-link :to="coachContactLink">Contact</router-link>
			<router-link :to="coachDetailLink">View Details</router-link>
		</div>
	</section>
</template>

<script>
	export default {
		props: ['id', 'firstName', 'LastName', 'rate', 'areas'],
		computed: {
			fullName() {
				return this.firstName + ' ' + this.LastName;
			},
			coachContactLink() {
				return `${this.$route.path}/${this.id}/contact`;
			},
			coachDetailLink() {
				return `${this.$route.path}/${this.id}`;
			},
		},
	};
</script>

<style scoped>
	.coach-item {
		margin: 1rem 0;
		border: 1px solid #424242;
		border-radius: 12px;
		padding: 1rem;
	}

	h3 {
		font-size: 1.5rem;
	}

	h3,
	h4 {
		margin: 0.5rem 0;
	}

	div {
		margin: 0.5rem 0;
	}

	.actions {
		display: flex;
		justify-content: flex-end;
	}
</style>
