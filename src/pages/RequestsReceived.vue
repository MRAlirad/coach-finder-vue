<template>
	<div class="request-received-page">
		<header>
			<h2>Requests Received</h2>
		</header>
		<div
			class="request-items-container"
			v-if="hasRequests"
		>
			<RequestItem
				v-for="req in receivedRequests"
				:key="req.id"
				:email="req.userEmail"
				:message="req.message"
			/>
		</div>
		<h3 v-else>You have't received any requests yet!</h3>
	</div>
</template>

<script>
	import RequestItem from '../components/RequestItem.vue';

	export default {
		components: {
			RequestItem,
		},
		computed: {
			receivedRequests() {
				return this.$store.getters['requests/requests'];
			},
			hasRequests() {
				return this.$store.getters['requests/hasRequests'];
			},
		},
	};
</script>

<style scoped>
	.request-received-page {
		border-radius: 12px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		padding: 1rem;
		margin: 2rem auto;
		max-width: 40rem;
		display: grid;
		gap: 15px;
	}

	header {
		text-align: center;
	}

	.request-items-container {
		margin: 0 auto;
		padding: 0;
		max-width: 30rem;
		width: 100%;
		display: grid;
		gap: 1rem;
	}

	h3 {
		text-align: center;
	}
</style>
