<template>
	<div class="coach-registration-page">
		<section class="form-section">
			<h2>Register as a coach now!</h2>
			<CoachForm />
		</section>
	</div>
</template>

<script>
	import CoachForm from '../components/CoachForm.vue';
	export default {
		components: {
			CoachForm,
		},
	};
</script>

<style scoped>
	.form-section {
		border-radius: 12px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		padding: 1rem;
		margin: 2rem auto;
		max-width: 40rem;
		display: grid;
		gap: 15px;
	}
</style>
