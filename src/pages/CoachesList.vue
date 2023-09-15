<template>
	<section>Filter</section>
	<div class="coaches-segment">
		<div class="controls">
			<Button
				text="Refresh"
				mode="outline"
			/>
			<Link
				to="/register"
				text="Register as Coach"
			/>
		</div>
		<div
			class="coaches-list"
			v-if="hasCoaches"
		>
			<CoachItem
				v-for="coach in filteredCoaches"
				:key="coach.id"
				:id="coach.id"
				:firstName="coach.firstName"
				:lastName="coach.lastName"
				:rate="coach.hourlyRate"
				:areas="coach.areas"
			/>
		</div>
		<h3 v-else>No Coaches Found</h3>
	</div>
</template>

<script>
	import CoachItem from '../components/CoachItem.vue';
	import Button from '../components/Button.vue';
	import Link from '../components/Link.vue';

	export default {
		components: {
			CoachItem,
			Button,
			Link,
		},
		computed: {
			filteredCoaches() {
				return this.$store.getters['coaches/coaches'];
			},
			hasCoaches() {
				return this.$store.getters['coaches/hasCoaches'];
			},
		},
	};
</script>

<style scoped>
	.coaches-segment {
		border-radius: 12px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		padding: 1rem;
		margin: 2rem auto;
		max-width: 40rem;
		display: grid;
		gap: 15px;
	}

	.coaches-list {
		display: grid;
		gap: 15px;
	}
	.controls {
		display: flex;
		justify-content: space-between;
	}
</style>
