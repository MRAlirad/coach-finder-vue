<template>
	<section class="coach-item">
		<h3>{{ fullName }}</h3>
		<h4>$ {{ rate }}/hour</h4>
		<div class="experties">
			<Badge
				v-for="area in areas"
				:key="area"
				:type="area"
				:title="area"
			/>
		</div>
		<div class="actions">
			<Link
				:to="coachContactLink"
				text="Contact"
				mode="outline"
			/>
			<Link
				:to="coachDetailLink"
				text="View Details"
			/>
		</div>
	</section>
</template>

<script>
	import Link from './Link.vue';
	import Badge from './Badge.vue';

	export default {
		components: {
			Link,
			Badge,
		},
		props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
		computed: {
			fullName() {
				return this.firstName + ' ' + this.lastName;
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
		border: 1px solid #424242;
		border-radius: 12px;
		padding: 1rem;
		display: grid;
		gap: 0.6rem;
	}

	h3 {
		font-size: 1.5rem;
	}

	.actions {
		display: flex;
		justify-content: flex-end;
	}
</style>
