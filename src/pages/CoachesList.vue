<template>
	<section>Filter</section>
	<div class="coaches-list" v-if="hasCoaches">
		<li v-for="coach in filteredCoaches" :key="coach.id"> {{ coach.firstName }}</li>
	</div>
	<h3 v-else> No Coaches Found </h3>
</template>

<script>
export default {
	computed: {
		filteredCoaches(){
			return this.$store.getters['coaches/coaches'];
		},
		hasCoaches(){
			return this.$store.getters['coaches/hasCoaches'];
		}
	}
};
</script>

<style></style>
