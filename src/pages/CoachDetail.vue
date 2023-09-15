<template>
	<div class="coach-detail-page">
		<section class="section name-section">
			<h2>{{ fullName }}</h2>
			<h3>${{ rate }}/hour</h3>
		</section>
		<section class="section content-section">
			<h2>Intrested? Reach out now!</h2>
			<Link
				:to="contactLink"
				text="Contact"
			/>
			<router-view></router-view>
		</section>
		<section class="section badge-description-section">
			<div class="experties">
				<Badge
					v-for="area in areas"
					:key="area"
					:type="area"
					:title="area"
				/>
			</div>
			<p>{{ description }}</p>
		</section>
	</div>
</template>

<script>
	import Link from '../components/Link.vue';
	import Badge from '../components/Badge.vue';

	export default {
		components: {
			Link,
			Badge,
		},
		props: ['id'],
		data() {
			return {
				selectedCoach: null,
			};
		},
		computed: {
			fullName() {
				return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
			},
			areas() {
				return this.selectedCoach.areas;
			},
			rate() {
				return this.selectedCoach.hourlyRate;
			},
			description() {
				return this.selectedCoach.description;
			},
			contactLink() {
				return `${this.$route.path}/${this.id}/contact`;
			},
		},
		created() {
			this.selectedCoach = this.$store.getters['coaches/coaches'].find(coach => coach.id === this.id);
		},
	};
</script>

<style scoped>
	.coach-detail-page {
		display: grid;
		gap: 2rem;
		padding: 2rem 0;
	}

	.section {
		border-radius: 12px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		padding: 1.5rem;
		margin: 0 auto;
		max-width: 40rem;
		display: grid;
		gap: 30px;
		width: 100%;
	}

	.experties {
		display: flex;
		gap: 0.5rem;
	}

	/* .name-section */
	/* content-section */
	/* badge-description-section */
</style>
