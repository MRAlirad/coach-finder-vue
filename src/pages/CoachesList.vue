<template>
	<section>Filter</section>
	<div
		class="coaches-list"
		v-if="hasCoaches"
	>
		<CoachItem
			v-for="coach in filteredCoaches"
			:key="coach.id"
			:id="coach.id"
			:firstName="coach.firstName"
			:LastName="coach.LastName"
			:rate="coach.hourlyRate"
			:areas="coach.areas"
		/>
	</div>
	<h3 v-else>No Coaches Found</h3>
</template>

<script>
	import CoachItem from '../components/CoachItem.vue';

	export default {
		components: {
			CoachItem,
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
	.controls {
		display: flex;
		justify-content: space-between;
	}
</style>
