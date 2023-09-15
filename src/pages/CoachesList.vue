<template>
	<CoachFilter @change-filter="setFilters" />
	<div class="coaches-segment">
		<div class="controls">
			<Button
				text="Refresh"
				mode="outline"
			/>
			<Link
				v-if="!isCoach"
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
	import CoachFilter from '../components/CoachFilter.vue';
	import Button from '../components/Button.vue';
	import Link from '../components/Link.vue';

	export default {
		components: {
			CoachItem,
			CoachFilter,
			Button,
			Link,
		},
		data() {
			return {
				activeFilters: {
					frontend: true,
					backend: true,
					career: true,
				},
			};
		},
		computed: {
			filteredCoaches() {
				const coaches = this.$store.getters['coaches/coaches'];
				return coaches.filter(coach => {
					if (this.activeFilters.frontend && coach.areas.includes('frontend')) return true;
					if (this.activeFilters.backend && coach.areas.includes('backend')) return true;
					if (this.activeFilters.career && coach.areas.includes('career')) return true;
					return false;
				});
			},
			hasCoaches() {
				return this.$store.getters['coaches/hasCoaches'];
			},
			isCoach() {
				return this.$store.getters['coaches/isCoach'];
			},
		},
		methods: {
			setFilters(updatedFilters) {
				this.activeFilters = updatedFilters;
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
